/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      const { id: user } = req.user;
      const { product: product_id, quantity, card, sub_wallet_naira, sub_wallet_points } = req.body;

      // Verify product
      const product = await Product.findOne({ id: product_id });
      if (!product) return ResponseHelper.json(400, res, 'Product does not exist');

      // Verify distributor
      const distributor = await Distributor.findOne({
        user,
        organization: product.organization,
      });
      if (!distributor)
        return ResponseHelper.json(400, res, 'User must be a verified distributor of the product organization');

      // Check card for availability of funds
      const payment_payload = {
        product: product_id,
        sub_wallet_naira,
        sub_wallet_points,
        quantity,
        card,
      };
      const check_response = await PaymentService.check_order(payment_payload, req.headers['authorization']);
      if (check_response.status !== 200)
        return ResponseHelper.json(400, res, `Payment service - ${check_response.data.message}`);

      const {
        data: { wallet_naira_debit, wallet_points_debit, card_debit },
      } = check_response.data;

      const code = Math.random()
        .toString(36)
        .substring(7)
        .toUpperCase();

      // Create order with pending status
      const order_payload = {
        code,
        distributor: distributor.id,
        product: product_id,
        organization: product.organization,
        amount_naira: wallet_naira_debit + card_debit,
        amount_points: wallet_points_debit,
        status: 'pending',
      };
      let order = await Order.create(order_payload).fetch();

      // Charger order transaction
      const charge_response = await PaymentService.charge_order(
        { ...payment_payload, order: order.id },
        req.headers['authorization']
      );
      if (charge_response.status !== 200)
        return ResponseHelper.json(400, res, `Payment service - ${charge_response.data.message}`);

      // Change order status to in-progress, add transaction to order record
      const {
        data: { id: transaction },
      } = charge_response.data;

      order = await Order.updateOne(order.id).set({
        transaction,
        status: 'in-progress',
      });

      return ResponseHelper.json(201, res, 'Order created successfully', order);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  query: async (req, res) => {
    try {

      const { criteria = {}, populate: populated_fields = [] } = req.body;
      const { per_page, page: _page } = req.query;
      const perPage = per_page || 20;
      const page = _page || 1;
      const skip = perPage * (page - 1);
      const populate = populated_fields.reduce((result, field) => ({ ...result, [field]: true }), {});
      const records = await Order.find({ where: criteria, limit: perPage, skip }, populate);
      const count = await Order.count(criteria);

      const meta = {
        criteria,
        page,
        populate: Object.keys(populate),
        total: count,
        prev_page: page > 1 ? page - 1 : false,
        per_page: perPage,
        next_page: count - (skip + perPage) > 0 ? page + 1 : false,
        page_count: Math.ceil(count / perPage),
      };

      return ResponseHelper.json(200, res, 'Orders retrieved successfully', records, meta);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  }
};

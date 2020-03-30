/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      const { organization } = req.user;
      const payload = req.body;
      const image = await GCSService.get_file(req, 'image');
      if (image) payload.image = await GCSService.upload(image, 'images/products/bn');
      const product = await Product.create({
        ...payload,
        organization,
      }).fetch();
      return ResponseHelper.json(201, res, 'Product created successfully', product);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  read: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne(id).populateAll();
      if (!product) return ResponseHelper.json(404, res, 'Product not found');
      return ResponseHelper.json(200, res, 'Product retrieved successfully', product);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  update: async (req, res) => {
    try {
      const {
        body: payload,
        params: { id: product_id },
        user: { organization },
      } = req;
      let product = await Product.findOne(product_id);
      if (!product) return ResponseHelper.json(404, res, 'Product not found');
      if (product.organization !== organization)
        return ResponseHelper.json(403, res, 'User must be administrator of organization that created product to update');
      const image = await GCSService.get_file(req, 'image');
      if (image) payload.image = await GCSService.upload(image, 'images/products/bn');
      product = await Product.updateOne(product_id).set(payload);
      return ResponseHelper.json(201, res, 'Product updated successfully', product);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  list: async (req, res) => {
    try {
      const { per_page, page: _page } = req.query;
      const perPage = per_page || 20;
      const page = _page || 1;
      const skip = perPage * (page - 1);
      const records = await Product.find({ limit: perPage, skip });
      const count = await Product.count();
      const meta = {
        page,
        prev_page: page > 1 ? page - 1 : false,
        per_page: perPage,
        next_page: count - (skip + perPage) > 0 ? page + 1 : false,
        page_count: Math.ceil(count / perPage),
        total: count,
      };
      return ResponseHelper.json(200, res, 'Products retrieved successfully', records, meta);
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
      const records = await Product.find({ where: criteria, limit: perPage, skip }, populate);
      const count = await Product.count(criteria);

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

      return ResponseHelper.json(200, res, 'Products retrieved successfully', records, meta);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
};

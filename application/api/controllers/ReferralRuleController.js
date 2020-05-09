/**
 * ReferralRuleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      const { organization } = req.user;
      const payload = { ...req.body, organization, status: 'active' };
      const rule = await ReferralRule.create(payload).fetch();
      return ResponseHelper.json(201, res, 'Referral rule created successfully', rule);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  read: async (req, res) => {
    try {
      const { id } = req.params;
      const rule = await ReferralRule.findOne(id);
      if (!rule) return ResponseHelper.json(404, res, 'Referral rule not found');
      return ResponseHelper.json(200, res, 'Referral rule retrieved successfully', rule);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  list: async (req, res) => {
    try {
      const { organization } = req.user;
      const { per_page, page: _page } = req.query;
      const perPage = per_page || 20;
      const page = _page || 1;
      const skip = perPage * (page - 1);
      const criteria = { organization };
      const records = await ReferralRule.find({ limit: perPage, skip, where: criteria });
      const count = await Product.count(criteria);
      const meta = {
        page,
        prev_page: page > 1 ? page - 1 : false,
        per_page: perPage,
        next_page: count - (skip + perPage) > 0 ? page + 1 : false,
        page_count: Math.ceil(count / perPage),
        total: count,
      };
      return ResponseHelper.json(200, res, 'Referral Rules retrieved successfully', records, meta);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { organization } = req.user;
      let rule = await ReferralRule.findOne(id);
      if (!rule) return ResponseHelper.json(404, res, 'Referral rule not found');
      if (rule.organization !== organization)
        return ResponseHelper.json(403, res, 'User must be administrator of organization that created rule to update');

      const payload = req.body;
      rule = await ReferralRule.updateOne(id).set(payload);
      return ResponseHelper.json(200, res, 'Referral rule updated successfully', rule);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const { organization } = req.user;
      let rule = ReferralRule.findOne(id);
      if (!rule) return ResponseHelper.json(404, res, 'Reward class not found');
      if (rule.organization !== organization) {
        return ResponseHelper.json(
          403,
          res,
          'User must be administrator of organization that created reward referral rule to delete'
        );
      }
      rule = await ReferralRule.destroyOne(id);
      return ResponseHelper.json(200, res, 'Referral rule deleted successfully', rule);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
};

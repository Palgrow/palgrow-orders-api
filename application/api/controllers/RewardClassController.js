/**
 * RewardClassController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      const { organization } = req.user;
      const payload = req.body;
      const reward_class = await RewardClass.create({ ...payload, organization }).fetch();

      // TODO: re-evaulate all distributor reward classes for current organization

      return ResponseHelper.json(201, res, 'Reward class created successfully', reward_class);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  update: async (req, res) => {
    try {
      const {
        body: payload,
        params: { id: reward_class_id },
        user: { organization },
      } = req;

      let reward_class = await RewardClass.findOne(reward_class_id);
      if (!reward_class) return ResponseHelper.json(404, res, 'Reward class not found');
      if (reward_class.organization !== organization)
        return ResponseHelper.json(
          403,
          res,
          'User must be administrator of organization that created reward class to update'
        );

      // TODO: re-evaulate all distributor reward classes for current organization

      reward_class = await RewardClass.updateOne(reward_class_id).set(payload);

      return ResponseHelper.json(200, res, 'Reward class updated successfully', reward_class);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  read: async (req, res) => {
    try {
      const {
        params: { id },
        user: { organization },
      } = req;
      const reward_class = await RewardClass.findOne(id).populateAll();
      if (!reward_class) return ResponseHelper.json(404, res, 'Reward class not found');
      if (reward_class.organization !== organization)
        return ResponseHelper.json(
          403,
          res,
          'User must be administrator of organization that created reward class to update'
        );
      return ResponseHelper.json(200, res, 'Reward class retrieved successfully', reward_class);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  list: async (req, res) => {
    try {
      const {
        user: { organization },
        query: { per_page, page: _page },
      } = req;
      const criteria = { organization };
      const perPage = per_page || 20;
      const page = _page || 1;
      const skip = perPage * (page - 1);
      const records = await RewardClass.find({ where: criteria, limit: perPage, skip });
      const count = await RewardClass.count(criteria);
      const meta = {
        page,
        prev_page: page > 1 ? page - 1 : false,
        per_page: perPage,
        next_page: count - (skip + perPage) > 0 ? page + 1 : false,
        page_count: Math.ceil(count / perPage),
        total: count,
      };
      return ResponseHelper.json(200, res, 'Reward classes retrieved successfully', records, meta);
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
      const records = await RewardClass.find({ where: criteria, limit: perPage, skip }, populate);
      const count = await RewardClass.count(criteria);

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

      return ResponseHelper.json(200, res, 'Reward classes retrieved successfully', records, meta);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
  delete: async (req, res) => {
    try {
      const {
        body: payload,
        params: { id: reward_class_id },
        user: { organization },
      } = req;

      let reward_class = await RewardClass.findOne(reward_class_id);
      if (!reward_class) return ResponseHelper.json(404, res, 'Reward class not found');
      if (reward_class.organization !== organization)
        return ResponseHelper.json(
          403,
          res,
          'User must be administrator of organization that created reward class to delete'
        );

      // TODO: re-evaulate all distributor reward classes for current organization

      reward_class = await RewardClass.destroyOne(reward_class_id);

      return ResponseHelper.json(200, res, 'Reward class deleted successfully', reward_class);
    } catch (e) {
      return ResponseHelper.error(e, res);
    }
  },
};

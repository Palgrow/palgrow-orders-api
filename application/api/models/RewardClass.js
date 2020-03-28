/**
 * RewardClass.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    organization: {
      model: "Organization"
    },
    minimum_total_order_value: {
      type: "number"
    },
    minimum_monthly_order_value: {
      type: "number"
    },
    minimum_referrals: {
      type: "number"
    },
    time_constraint: {
      type: "number"
    },
    point_reward_per_product: {
      type: "number"
    }
  }
};

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
    name: {
      type: "string",
      required: true
    },
    min_total_order_value: {
      type: "number"
    },
    min_monthly_order_value: {
      type: "number"
    },
    min_referrals: {
      type: "number"
    },
    time_constraint: {
      type: "number"
    },
    point_reward_per_product: {
      type: "number"
    },
    distributors: {
      collection: 'Distributor',
      via: 'reward_class'
    }
  }
};

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
    description: {
      type: "string",
      required: true
    },
    min_total_order_value: {
      type: "number",
      min: 0
    },
    max_total_order_value: {
      type: "number",
      min: 0
    },
    min_monthly_order_value: {
      type: "number",
      min: 0
    },
    max_monthly_order_value: {
      type: "number",
      min: 0
    },
    min_referrals: {
      type: "number",
      min: 0
    },
    max_referrals: {
      type: "number",
      min: 0
    },
    time_constraint: {
      type: "number",
      min: 0
    },
    point_reward_per_product: {
      type: "number",
      min: 0
    },
    status: {
      type: 'string',
      isIn: ['active', 'inactive'],
    },
    distributors: {
      collection: 'Distributor',
      via: 'reward_class'
    }
  }
};

/**
 * ReferralRule.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    organization: {
      model: 'Organization',
    },
    type: {
      type: 'string',
      isIn: ['per-referral', 'per-generation'],
    },
    reward_application: {
      type: 'string',
      isIn: ['first-purchase', 'all-purchases'],
    },
    generation_starting: {
      type: 'number',
      min: 0,
    },
    generation_ending: {
      type: 'number',
      min: 1,
    },
    percentage_reward_delta: {
      type: 'number',
      min: 0,
      max: 100,
    },
    percentage_reward_earnings: {
      type: 'number',
      min: 0,
      max: 100,
    },
    max_idle_time_months: {
      type: 'number',
      min: 0,
    },
    min_referrals_per_month: {
      type: 'number',
      min: 0,
    },
    max_referrals: {
      type: 'number',
      min: 0,
    },
    status: {
      type: 'string',
      isIn: ['active', 'inactive'],
    },
  },
};

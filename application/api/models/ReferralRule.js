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
    },
    generation_ending: {
      type: 'number',
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
    },
    min_referrals_per_month: {
      type: 'number',
    },
    max_referrals: {
      type: 'number',
    },
    status: {
      type: 'string',
      isIn: ['active', 'inactive'],
    },
  },
};

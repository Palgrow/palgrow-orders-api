/**
 * Distributor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    personnel_id: {
      type: 'string',
    },
    code_referral: {
      type: 'string',
    },
    referred_by: {
      model: 'Distributor',
    },
    organization: {
      model: 'Organization',
    },
    reward_class: {
      model: 'RewardClass',
    },
    status: {
      type: 'string',
      isIn: ['pristine', 'pending', 'verified', 'suspended'],
      defaultsTo: 'pristine',
    },
  },
};

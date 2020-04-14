/**
 * Distributor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    user: {
      model: 'User',
    },
    code_dist: {
      type: 'string',
    },
    code_referral: {
      type: 'string',
    },
    referred_by: {
      model: 'Distributor',
    },
    sub_wallets: {
      collection: 'SubWallet',
      via: 'distributor',
    },
    organization: {
      model: 'Organization',
    },
    reward_class: {
      model: 'RewardClass',
    },
    status: {
      type: 'string',
      isIn: ['verified', 'suspended'],
      defaultsTo: 'verified',
    },
  },
};

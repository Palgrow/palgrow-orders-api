/**
 * WalletType.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    organization: {
      model: 'Organization',
    },
    currency_name: {
      type: 'string',
      isIn: ['points', 'naira'],
      defaultsTo: 'naira',
    },
    currency_symbol: {
      type: 'string',
      isIn: ['Point(s)', '₦'],
      defaultsTo: '₦',
    },
    currency_code: {
      type: 'string',
      isIn: ['Point(s)', 'NGN'],
      defaultsTo: 'NGN',
    },
    status: {
      type: 'string',
      isIn: ['active', 'inactive', 'deleted'],
      defaultsTo: 'active',
    },
    withdrawable: {
      type: 'boolean',
      defaultsTo: false,
    },
    payable: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
};

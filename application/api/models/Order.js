/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    code: {
      type: 'string',
    },
    distributor: {
      model: 'Distributor',
    },
    organization: {
      model: 'Organization',
    },
    amount_naira: {
      type: 'number',
      defaultsTo: 0,
    },
    amount_points: {
      type: 'number',
      defaultsTo: 0,
    },
    product: {
      model: 'Product',
    },
    transaction: {
      model: 'Transaction',
    },
    status: {
      type: 'string',
      isIn: ['pending', 'in-progress', 'cancelled', 'successful'],
      defaultsTo: 'pending',
    },
  },
};

/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    amount_naira: {
      type: 'number',
      defaultsTo: 0
    },
    debit: {
      model: 'User'
    },
    credit: {
      model: 'User'
    },
    amount_points: {
      type: 'number',
      defaultsTo: 0
    },
    bank_account: {
      model: 'BankAccount',
    },
    order: {
      model: 'Order'
    },
    card: {
      model: 'Card',
    },
    reference: {
      type: 'string',
      allowNull: true,
    },
    code: {
      type: 'string',
    },
    description: {
      type: 'string',
      required: true,
    },
    status: {
      type: 'string',
      isIn: ['pending', 'successful', 'failed', 'in-progress'],
      defaultsTo: 'pending',
    },

  },

};


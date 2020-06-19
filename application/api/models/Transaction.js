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
      defaultsTo: 0,
    },
    amount_points: {
      type: 'number',
      defaultsTo: 0,
    },
    debit: {
      model: 'User',
    },
    credit: {
      model: 'User',
    },
    bank_account: {
      model: 'BankAccount',
    },
    order: {
      model: 'Order',
    },
    card: {
      model: 'Card',
    },
    type: {
      type: 'string',
      isIn: ['payment', 'reward', 'withdrawal'],
      defaultsTo: 'payment',
    },
    amount_card_naira: {
      type: 'number',
      defaultsTo: 0,
    },
    amount_sub_wallet_naira: {
      type: 'number',
      defaultsTo: 0,
    },
    amount_sub_wallet_points: {
      type: 'number',
      defaultsTo: 0,
    },
    sub_wallet_naira: {
      model: 'SubWallet',
    },
    sub_wallet_points: {
      model: 'SubWallet',
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

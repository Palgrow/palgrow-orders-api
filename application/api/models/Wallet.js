/**
 * Wallet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    user: {
      model: 'User',
    },
    owner: {
      type: 'string',
      isIn: ['organization', 'distributor'],
    },
    balance: {
      type: 'number',
      defaultsTo: 0,
    },
    organization: {
      model: 'organization',
    },
    cards: {
      collection: 'Card',
      via: 'wallet',
    },
    bank_accounts: {
      collection: 'BankAccount',
      via: 'wallet',
    },
    sub_wallets: {
      collection: 'SubWallet',
      via: 'wallet',
    },
  },
};

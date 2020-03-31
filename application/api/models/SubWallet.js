/**
 * SubWallet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    distributor: {
      model: 'Distributor',
    },
    wallet_type: {
      model: 'WalletType',
    },
    wallet: {
      model: 'Wallet',
    },
    balance: {
      type: 'number',
      defaultsTo: 0,
    },
  },
};

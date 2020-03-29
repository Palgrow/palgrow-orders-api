/**
 * BankAccount.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    wallet: {
      model: "Wallet"
    },
    user: {
      model: "User"
    },
    account_number: {
      type: "string",
      required: true
    },
    account_name: {
      type: "string",
      required: true
    },
    bank_code: {
      type: "string",
      required: true
    },
    bank_name: {
      type: "string",
      required: true
    },
    recipient_code: {
      type: "string",
      required: true
    },
    isDeleted: {
      type: "boolean",
      defaultsTo: false
    }
  }
};

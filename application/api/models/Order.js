/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    code: {
      type: "string"
    },
    distributor: {
      model: "Distributor"
    },
    organization: {
      model: "Organization"
    },
    amount_naira: {
      type: "number",
      defaultsTo: 0
    },
    amount_points: {
      type: "number",
      defaultsTo: 0
    },
    order_items: {
      collection: "OrderItem",
      via: "order"
    },
    transaction: {
      model: "Transaction"
    }
  }
};

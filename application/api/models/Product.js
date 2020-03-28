/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    organization: {
      model: "Organization"
    },
    name: {
      type: "string"
    },
    SKU: {
      type: "string"
    },
    description: {
      type: "string"
    },
    cost: {
      type: "json",
      defaultsTo: {
        naira: 1,
        points: 1
      }
    },
    minimum_order_qty: {
      type: "number",
      defaultsTo: 1
    }
  }
};

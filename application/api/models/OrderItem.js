/**
 * OrderItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    product: {
      model: "Product"
    },
    quantity: {
      type: "number",
      defaultsTo: 0
    },
    cost_naira: {
      type: "number",
      defaultsTo: 0
    },
    cost_points: {
      type: "number",
      defaultsTo: 0
    },
    total_naira: {
      type: "number",
      defaultsTo: 0
    },
    total_points: {
      type: "number",
      defaultsTo: 0
    },
    code: {
      type: "string"
    },
    order: {
      model: "Order"
    }
  }
};

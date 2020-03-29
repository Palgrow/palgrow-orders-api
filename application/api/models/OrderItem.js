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
    qty: {
      type: "number",
      defaultsTo: 1,
      min: 1
    },
    cost_naira: {
      type: "number",
      defaultsTo: 0,
      min: 0
    },
    cost_points: {
      type: "number",
      defaultsTo: 0,
      min: 0
    },
    total_naira: {
      type: "number",
      defaultsTo: 0,
      min: 0
    },
    total_points: {
      type: "number",
      defaultsTo: 0,
      min: 0
    },
    code: {
      type: "string"
    },
    order: {
      model: "Order"
    }
  }
};

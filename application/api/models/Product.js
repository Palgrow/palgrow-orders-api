/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    organization: {
      model: 'Organization',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    sku: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'json',
    },
    cost_naira: {
      type: 'number',
      min: 1,
      required: true,
    },
    sale_naira: {
      type: 'number',
      min: 1,
      required: true,
    },
    cost_points: {
      type: 'number',
      min: 1,
      required: true,
    },
    min_order_qty: {
      type: 'number',
      min: 1,
      required: true,
    },
    status: {
      type: 'string',
      isIn: ['available', 'unavailable'],
      defaultsTo: 'available',
    },
  },
};

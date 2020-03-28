/**
 * Organization.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    admin: {
      model: 'User',
    },
    name: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    description: {
      type: 'string',
      allowNull: true,
    },
    doc_cac: {
      type: 'json',
    },
    doc_bn: {
      type: 'json',
    },
    street: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
    status: {
      type: 'string',
      isIn: ['pristine', 'pending', 'verified', 'suspended'],
      defaultsTo: 'pristine',
    },
    wallet_types: {
      collection: 'WalletType',
      via: 'organization',
    },
  },
};

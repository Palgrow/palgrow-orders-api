/* eslint-disable no-param-reassign */
/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {
  fetchRecordsOnUpdate: true,
  attributes: {
    avatar: {
      type: 'string',
      defaultsTo: 'https://i.pravatar.cc/300',
    },
    name_first: {
      type: 'string',
      required: true,
    },
    name_last: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
    },
    phone_prefix: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    id_type: {
      type: 'string',
    },
    id_number: {
      type: 'string',
    },
    id_doc: {
      type: 'json',
    },
    role: {
      type: 'string',
      defaultsTo: 'distributor',
      isIn: ['distributor', 'admin', 'super-admin'],
    },
    token: {
      type: 'string',
      allowNull: true,
    },
    password: {
      type: 'string',
    },
    status: {
      type: 'string',
      defaultsTo: 'pending',
      isIn: ['pending', 'verified', 'suspended'],
    },
    device: {
      model: 'Device',
    },
    distributor: {
      collection: 'Distributor',
      via: 'user'
    },
    organization: {
      model: 'Organization',
    },
    wallet: {
      model: 'Wallet',
    },
  },
  beforeCreate(values, cb) {
    if (!values.password) {
      return cb({
        err: ['Password is required'],
      });
    }
    bcrypt.hash(values.password, 10, (err, hash) => {
      if (err) {
        return cb(err);
      }
      values.password = hash;
      cb();
    });
  },
  beforeUpdate(values, cb) {
    if (values.password) {
      bcrypt.hash(values.password, 10, (err, hash) => {
        if (err) return cb(err);
        values.password = hash;
        cb();
      });
    } else cb();
  },
  customToJSON() {
    return _.omit(this, ['password', 'token']);
  },
};

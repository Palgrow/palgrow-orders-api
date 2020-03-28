/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const _ = require('lodash');
const axios = require('axios');
const crypto = require('crypto');
const Raven = require('raven');
const dotenv = require('dotenv');
const Promise = require('bluebird');
const ResponseHelper = require('@dsninjas/response');
const moment = require('moment');
const path = require('path');
const async = require('async');
const { v4: uuidv4 } = require('uuid');
const { Storage } = require('@google-cloud/storage');

dotenv.config();

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports.bootstrap = async function(cb) {
  const storage = new Storage();
  const { bucket_name } = sails.config.custom.googleCloud;
  global._ = _;
  global.Axios = axios;
  global.capitalize = capitalize;
  global.moment = moment;
  global.crypto = crypto;
  global.Raven = Raven;
  global.Promise = Promise;
  global.GoogleCloudStorage = storage;
  global.GoogleCloudBucket = storage.bucket(bucket_name);
  global.Path = path;
  global.Async = async;
  global.UUID = uuidv4;

  process
    .on('unhandledRejection', (reason, p) => {
      // eslint-disable-next-line no-console
      console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
      // eslint-disable-next-line no-console
      console.error(err, 'Uncaught Exception thrown');
      process.exit(1);
    });
  Raven.config(sails.config.custom.raven.configUrl).install();
  global.ResponseHelper = new ResponseHelper(Raven);
  cb();
};

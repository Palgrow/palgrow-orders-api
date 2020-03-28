/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {
    port: process.env.PORT || 3007,
    secret: 'KsZRbMVEItnyLuPeiq4kwPvZ0CgojrR6',
    datastores: {
      postgres: {
        adapter: require('sails-postgresql'),
        host: 'localhost',
        user: 'dev',
        password: 'Lexmark0419',
        database: 'palgrow',
      },
      cache: {
        adapter: require('sails-redis'),
        host: 'localhost',
        port: 6379,
      },
    },
    models: {
      datastore: 'postgres',
      migrate: 'alter',
    },
    custom: {
      firebase: {},
      raven: {
        configUrl: 'https://e3a882518fc04023a59a0bcb6a0785ff@sentry.io/4192028',
      },
      googleCloud: {
        bucket_name: 'palgrow-staging',
      },
    },
    blueprints: {
      rest: false,
      actions: false,
      shortcuts: false,
    },
    session: {
      cookie: {
        secure: true,
      },
    },
    settings: {
      api: {
        baseUrl: 'http://localhost:4000',
      },
    },
    sockets: {
      onlyAllowOrigins: [],
    },
    security: {
      cors: {
        allRoutes: true,
        allowOrigins: '*',
        allowCredentials: false,
      },
    },
  };
  
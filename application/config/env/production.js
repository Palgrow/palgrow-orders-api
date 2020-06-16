module.exports = {
  port: process.env.PORT || 1337,
  secret: process.env.APP_SECRET,
  datastores: {
    // postgres: {
    //   adapter: require('sails-postgresql'),
    //   host: process.env.POSTGRES_HOST,
    //   user: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: 'palgrow',
    // },
    mongo: {
      adapter: require("sails-mongo"),
      url: process.env.MONGO_URL,
      replicaSet: process.env.MONGO_REPLICA_SET,
      authSource:'admin',
      ssl: true
    },
  },
  models: {
    datastore: 'mongo',
    migrate: 'safe',
  },
  custom: {
    firebase: {},
    raven: {
      configUrl: process.env.RAVEN_CONFIG_URL,
    },
    googleCloud: {
      bucket_name: process.env.GC_BUCKET_NAME,
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
      baseUrl: process.env.API_BASE_URL,
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
      allowRequestHeaders: '*',
    },
  },
};

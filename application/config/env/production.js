module.exports = {
  port: process.env.PORT || 1337,
  secret: process.env.APP_SECRET,
  datastores: {
    postgres: {
      adapter: require('sails-postgresql'),
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'palgrow',
    },
    cache: {
      adapter: require('sails-redis'),
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  },
  models: {
    datastore: 'postgres',
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
    },
  },
};

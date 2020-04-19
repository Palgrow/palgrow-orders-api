// const redis = require('redis');
// const asyncRedis = require('async-redis');
//
// const RedisClient = asyncRedis.decorate(redis.createClient({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
// }));

module.exports = {
  // saveToken: async token => RedisClient.rpush('authorized_tokens', token),
  // checkToken: async token => {
  //   let length = await RedisClient.llen('blacklisted_tokens');
  //   const blacklisted_tokens = await RedisClient.lrange('blacklisted_tokens', 0, length - 1);
  //   if (blacklisted_tokens.includes(token)) return false;
  //   length = await RedisClient.llen('authorized_tokens');
  //   const authorized_tokens = await RedisClient.lrange('authorized_tokens', 0, length - 1);
  //   if (authorized_tokens.includes(token)) return true;
  //   return false;
  // },
  // blacklistToken: async token => {
  //   await RedisClient.lrem('authorized_tokens', 0, token);
  //   return RedisClient.rpush('blacklisted_tokens', token);
  // },
};

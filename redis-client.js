const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'redis',
  port: 6379
});

redisClient.on('connect', function() {
  console.log('Connected to Redis');
});

redisClient.on('error', function (err) {
  console.log('Redis Client Error ' + err);
});

const redis = require('redis');
const client = redis.createClient({
    url: 'redis://localhost:6379' // 这里假设你的 Redis 服务器运行在本地，默认端口为 6379
});

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

module.exports = client;


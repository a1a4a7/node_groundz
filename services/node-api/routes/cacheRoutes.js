const express = require('express');
const router = express.Router();
const redisClient = require('../../../redis-client');

// 设置一个路由来演示 Redis 的基本操作
router.get('/cache', async (req, res) => {
    try {
        // 设置 Redis 中的值
        await redisClient.set('key', 'value');
        
        // 从 Redis 中获取值
        const value = await redisClient.get('key');
        
        // 发送响应
        res.send(`The value of 'key' is ${value}.`);
    } catch (err) {
        console.error('Redis error:', err);
        res.status(500).send('Error accessing Redis');
    }
});

module.exports = router;

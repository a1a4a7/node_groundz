// 路由文件
const express = require('express');
const router = express.Router();
const { send } = require('../controllers/kafkaController');

router.post('/send-message', send);

module.exports = router;

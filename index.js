const express = require('express');
// const userController = require('./services/node-api/controllers/userControllers');
const userRoutes = require('./services/node-api/routes/userRoutes');
const cacheRoutes = require('./services/node-api/routes/cacheRoutes');
const kafkaRoute = require('./services/node-api/routes/kafkaRoutes');
const router = express.Router();
const consumer = require('./services/kafka/consumer');

const app = express();

// 中间件配置
app.use(express.json()); // 用于解析 JSON 格式的请求体

// 集成 Redis 测试路由
app.use('/', cacheRoutes);

// 路由配置
app.use('/api/', userRoutes);

app.use('/', kafkaRoute);
app.use(express.json());

app.get('/home', (req, res) => {
  res.send('base Nihao homepage');
});

// 定义端口并启动服务器
/* ((((( 改 env ))))) */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // 如果需要进行单元测试等，可能需要导出 app

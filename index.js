const express = require('express');
// const userController = require('./services/node-api/controllers/userControllers');
const userRoutes = require('./services/node-api/routes/userRoutes');
const cacheRoutes = require('./services/node-api/routes/cacheRoutes');
const kafkaRoute = require('./services/node-api/routes/kafkaRoutes');
const {
  getUsersMysql,
  createUser,
} = require('./services/node-api/controllers/mysqlUserController');
const mongodbUsers = require('./services/node-api/routes/mongoUsersRoutes');
const db = require('./databases/mongodb/mongodb');

const router = express.Router();

const consumer = require('./services/kafka/consumer');

const app = express();

const bruh = 123;

// 定义端口
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(express.json()); // 用于解析 JSON 格式的请求体

app.get('/', (req, res) => {
  res.send('Welcome to the root route!');
});

// 集成 Redis 测试路由
app.use('/', cacheRoutes);

// 路由配置
app.use('/api/', userRoutes);

app.use('/', kafkaRoute);
app.use(express.json());

app.get('/home', (req, res) => {
  res.send('base Nihao homepage');
});

app.get('/mysqlusers', getUsersMysql);
app.post('/mysqlusers', createUser);

/* mongoUsers */
app.use('/mongo', mongodbUsers);

// 定义端口并启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // 如果需要进行单元测试等，可能需要导出 app

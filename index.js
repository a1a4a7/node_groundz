const express = require('express');
const userRoutes = require('./services/node-api/routes/userRoutes');

const app = express();

// 中间件配置
app.use(express.json()); // 用于解析 JSON 格式的请求体

// 路由配置
app.use('/api/users', userRoutes);

// 定义端口并启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // 如果需要进行单元测试等，可能需要导出 app

// database.js
const mysql = require('mysql2');

// 创建数据库连接池
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'mysql', // 使用环境变量或Docker服务名称
  user: process.env.MYSQL_USER || 'root',      // 使用环境变量或默认用户名
  password: process.env.MYSQL_PASSWORD || 'ImPassword123@', // 使用环境变量或默认密码
  database: process.env.MYSQL_DATABASE || 'node_groundz'  // 使用环境变量或默认数据库名
});

// 使用 Promise API
const promisePool = pool.promise();

module.exports = promisePool;

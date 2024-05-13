// database.js
const mysql = require('mysql2');

// 创建数据库连接池
const pool = mysql.createPool({
  host: 'localhost', // 数据库服务器地址
  user: 'root',      // 数据库用户名
  password: 'ImPassword123@', // 数据库密码
  database: 'node_groundz'  // 要连接的数据库名
});

// 使用 Promise API
const promisePool = pool.promise();

module.exports = promisePool;

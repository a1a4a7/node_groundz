// usersController.js
const db = require('../../../databases/mysql/mysql');

async function getUsersMysql(req, res) {
  try {
    const [rows, fields] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}

async function createUser(req, res) {
    const { name, email } = req.body;
    try {
        const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
        const result = await db.query(sql, [name, email]);
        res.send(`User added with ID: ${result[0].insertId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding the user');
    }
}

module.exports = { getUsersMysql, createUser };

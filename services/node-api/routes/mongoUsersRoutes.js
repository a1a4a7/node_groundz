// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/mongoUserModel');

// 添加新用户
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// 获取所有用户
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;

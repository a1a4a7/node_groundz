// 假设已经有 UserModel
const UserModel = require('../models/user');

exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json(users);
};

exports.addUser = async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

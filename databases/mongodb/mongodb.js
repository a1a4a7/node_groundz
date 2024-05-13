const mongoose = require('mongoose');

// 连接到 MongoDB
mongoose.connect('mongodb://localhost:27017/node_groundz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB connected!");
});

module.exports = db;

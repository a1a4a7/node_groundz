const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_HOST || 'mongodb'}:27017/node_groundz`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

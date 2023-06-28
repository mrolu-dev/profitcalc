const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost:27017/dropshipping', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

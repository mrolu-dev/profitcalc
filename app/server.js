const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
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

// Routes
app.use('/api/calculator', calculatorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


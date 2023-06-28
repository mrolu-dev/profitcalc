const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
// require('./src/utils/db');

// Routes
app.use('/api/calculator', calculatorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


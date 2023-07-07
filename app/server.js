const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Middleware configured successfully.");

// Connect to MongoDB
console.log("Connecting to MongoDB...");
require('./src/utils/db');


// Routes
console.log("Setting up routes...");
app.use('/api/calculator', calculatorRoutes);
console.log("Routes configured successfully.");


// Start the server
console.log(`Starting the server on port ${port}...`);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


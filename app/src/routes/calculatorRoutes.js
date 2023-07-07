const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Routes
router.post('/calculate', calculatorController.calculate);
router.get('/result', calculatorController.displayResult);

module.exports = router;


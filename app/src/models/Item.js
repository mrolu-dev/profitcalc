const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  costPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  taxRate: { type: Number, required: true },
  shippingCost: { type: Number, required: true },
  profit: { type: Number, required: true },
  expenses: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);


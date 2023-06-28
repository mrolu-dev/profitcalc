const Item = require('../models/Item');
const calculateProfit = require('../utils/calculateProfit');

module.exports = {
  calculate: async (req, res) => {
    const { costPrice, sellingPrice, taxRate, shippingCost } = req.body;

    // Calculate profit and expenses
    const { profit, expenses } = calculateProfit(costPrice, sellingPrice, taxRate, shippingCost);

    // Create a new item in the database
    const newItem = new Item({
      costPrice,
      sellingPrice,
      taxRate,
      shippingCost,
      profit,
      expenses,
    });

    try {
      await newItem.save();
      res.status(200).json({ success: true, newItem });
    } catch (err) {
      console.error('Failed to save item:', err);
      res.status(500).json({ success: false, message: 'Failed to save item' });
    }
  },
};


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
    // Save the new item
      await newItem.save();
    
     // Redirect to the result page
      res.redirect('/api/calculator/result');
    } catch (err) {
      console.error('Failed to save item:', err);
      res.status(500).json({ success: false, message: 'Failed to save item' });
    }
  },

  displayResult: async (req, res) => {
    try {
      // Retrieve the calculation result from the database
      const resultItem = await Item.findOne().sort({ _id: -1 }).exec();
      // Render the result page with the calculation result
      res.render('result', { resultItem });
   
    } catch (err) {
      console.error('Failed to save item:', err);
      res.status(500).json({ success: false, message: 'Failed to save item' });
    }
  },
};


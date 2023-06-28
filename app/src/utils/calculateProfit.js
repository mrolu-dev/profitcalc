module.exports = (costPrice, sellingPrice, taxRate, shippingCost) => {
  const expenses = costPrice + shippingCost;
  const tax = (sellingPrice * taxRate) / 100;
  const profit = sellingPrice - expenses - tax;

  return { profit, expenses };
};


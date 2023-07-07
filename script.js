document.getElementById('calculatorForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const costPrice = parseFloat(document.getElementById('costPrice').value);
  const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value);
  const shippingCost = parseFloat(document.getElementById('shippingCost').value);

  // Perform calculations or API requests to obtain the result
  const profit = sellingPrice - costPrice - shippingCost;
  const expenses = costPrice + shippingCost;

  // Redirect to the result page with query parameters
  const resultUrl = `result.html?profit=${profit}&expenses=${expenses}`;
  window.location.href = resultUrl;
});

// The code below will be moved to the result.html page or result.js file

/*
const payload = { costPrice, sellingPrice, taxRate, shippingCost };

fetch('/api/calculator/calculate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      document.getElementById('result').innerHTML = `
        <p>Profit: $${data.newItem.profit}</p>
        <p>Expenses: $${data.newItem.expenses}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = `<p>Failed to calculate. Please try again.</p>`;
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    document.getElementById('result').innerHTML = `<p>An error occurred. Please try again.</p>`;
  });
*/

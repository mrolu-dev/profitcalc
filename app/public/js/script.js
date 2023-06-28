document.getElementById('calculatorForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const costPrice = parseFloat(document.getElementById('costPrice').value);
  const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
  const taxRate = parseFloat(document.getElementById('taxRate').value);
  const shippingCost = parseFloat(document.getElementById('shippingCost').value);

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
});


// result.js
// JavaScript code for the result.html page in the dropshipping calculator app

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const profit = urlParams.get('profit');
  const expenses = urlParams.get('expenses');

  // Display the result in the div with id "result"
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>Profit: $${profit}</p>
    <p>Expenses: $${expenses}</p>
  `;
});

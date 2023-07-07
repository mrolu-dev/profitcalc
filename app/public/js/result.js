// result.js
// JavaScript code for the result.html page in the dropshipping calculator app

document.addEventListener('DOMContentLoaded', () => {
  // Get the calculation result values from the HTML
  const profitElement = document.getElementById('profit');
  const expensesElement = document.getElementById('expenses');

  // Extract the values from the HTML elements
  const profit = parseFloat(profitElement.textContent.replace('$', ''));
  const expenses = parseFloat(expensesElement.textContent.replace('$', ''));

  // Example functionality: Update the styling based on the profit value
  if (profit > 0) {
    profitElement.style.color = 'green';
  } else if (profit < 0) {
    profitElement.style.color = 'red';
  } else {
    profitElement.style.color = 'black';
  }

  // Example functionality: Log the profit and expenses to the console
  console.log('Profit:', profit);
  console.log('Expenses:', expenses);
});

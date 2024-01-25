const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all the prices using querySelectorAll
  const prices = document.querySelectorAll('.price');

  // Calculate the total sum
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });

  // Create a new row for the total price
  const table = document.querySelector('table');
  const newRow = table.insertRow(-1); // -1 to append to the end
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set cell content
  cell1.textContent = 'Total Price';
  cell2.textContent = totalPrice;
};

getSumBtn.addEventListener("click", getSum);

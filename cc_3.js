// Task 1
// Declare and initialize the array with at least five numerical values
let prices = [200, 250, 300, 350, 400];

// Add a new price to the array
prices.push(450);

// Remove the first price from the array
prices.shift();

// Log the updated price list to the console
console.log(prices);
// Task 2
// Declare and initialize the array with at least five numerical values representing quantities
let orders = [10, 15, 20, 25, 35];

// Increase the third order qunatity by 5
orders[2] += 5;

// Calculate the total number of all orders
let totalOrders = orders.reduce((acc, quantity) => acc + quantity, 0);

// Log the updated array and total order count to the console
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

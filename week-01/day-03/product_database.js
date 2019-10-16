'user strict';
// # Product database

// We are going to represent our products in a map where the keys are strings
// representing the product's name and the values are numbers representing the
// product's price.

// - Create a map with the following key-value pairs.

//   | Product name (key) | Price (value) |
//   | :----------------- | :------------ |
//   | Eggs               | 200           |
//   | Milk               | 200           |
//   | Fish               | 400           |
//   | Apples             | 150           |
//   | Bread              | 50            |
//   | Chicken            | 550           |
var product_database = new Map([
    ['Eggs',200],
    ['Milk',200],
    ['Fish',400],
    ['Apples',150],
    ['Bread',50],
    ['Chicken',550],
])
// - Create an application which solves the following problems.
//   - [How much is the fish?](https://www.youtube.com/watch?v=cbB3iGRHtqA)
console.log(product_database.get('Fish'));
//   - What is the most expensive product?
var max_price = 0 ;
var max_price_product = '';
product_database.forEach((price,name) => {
    if (price>max_price) {
        max_price_product = name;
    }
});
console.log(max_price_product);

//   - What is the average price?
var sum = 0;
product_database.forEach( price => {
    sum += price;
});
console.log(sum/product_database.size);

//   - How many products' price is below 300?
var total = 0;
product_database.forEach( price => {
   if (price<300) {
       total += 1;
   }
});
console.log(total);
//   - Is there anything we can buy for exactly 125?
var can_buy_with_125 = false;
product_database.forEach( price => {
   if (price===125) {
      can_buy_with_125 = true;
   }
});
console.log(can_buy_with_125);
//   - What is the cheapest product?

var cheapest_price = Number.MAX_SAFE_INTEGER ;
var cheapest_price_product = '';
product_database.forEach((price,name) => {
    if (price<cheapest_price) {
        cheapest_price = price;
        cheapest_price_product = name;
    }
});
console.log(cheapest_price_product);
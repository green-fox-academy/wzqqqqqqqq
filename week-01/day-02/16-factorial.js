'use strict';

const factorial =(n) =>!(n > 1) ? 1 : factorial(n - 1) * n;
console.log(factorial(3));

// - Create a function called `factorio`
//   that returns it's input's factorial
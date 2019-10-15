'use strict';

(function sum(a) {
  let sum =0;
  for (let index = 0; index <= a; index++) {
    sum=index+sum;
  }
  console.log(sum);
})(5)

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
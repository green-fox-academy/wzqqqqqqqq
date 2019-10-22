// Arrow function
// Write a function call in the commented area with an old anonym function and an arrow function.
// Both anonym functions functions should take a number parameter and return it's square value.
'user strict';

function multiPurposeFunction(action) {
  if (action) {
    console.log(action(3));
  }
}

function exampleNonAnonymFunction(param) {
  return param * param;
}

function frameFunction() {
  // this function call shows an example,
  // but it is not using anonym functions
  multiPurposeFunction(exampleNonAnonymFunction());
  // write your code here
 multiPurposeFunction((function(param){return param* param}));

 multiPurposeFunction(param => param *param);
 
}

frameFunction();

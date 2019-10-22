// In the next exercise write two anonym functions again. This time the returned value is conditional.
// If the first parameter is an empty string, it should return the second parameter.
// If not, it should return the two parameters joined by a single space.

function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function frameFunction() {
  // Write your code here
  multiPurposeFunction((...params) => (params[0] ? params.join(' ') : params[1]));
  
  multiPurposeFunction(function (string1, string2) {
    return string1[0] ? `${string1} ${string2}` : string2;
  });
}

frameFunction();
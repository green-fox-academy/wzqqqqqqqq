'use strict';

let animals = ['dog', 'cat', 'kitten'];

for (let index = 0; index < animals.length; index++) {
   animals[index] = animals[index] + "s";
}

console.log(animals);


// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops
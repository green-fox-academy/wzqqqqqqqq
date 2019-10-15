'use strict';

let aj = [3, 4, 5, 6, 7];

let aj_reverse_1 = aj.reverse();

let aj_reverse_2 = aj;

for (let index = aj.length; index > 0; index--) {
  aj_reverse_2[aj_reverse_2.length - aj.length] = aj[index];
}
console.log(aj_reverse_1);

console.log(aj_reverse_2);


// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`
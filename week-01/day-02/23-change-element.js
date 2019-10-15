'use strict';

let s = [1, 2, 3, 8, 5, 6];

let s2 = s.map((i) => {
   if (i === 8) {
      i = 4;
   }
   return i;
})

console.log(s2);


// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test
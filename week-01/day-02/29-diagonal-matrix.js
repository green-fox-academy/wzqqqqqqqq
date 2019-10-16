'use strict';

function print2DList(a) {
  for (let index = 1; index <= a; index++) {
    console.log('0 '.repeat(a - index) + '1' + ' 0'.repeat(index - 1));
  }
}

print2DList(4);


// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
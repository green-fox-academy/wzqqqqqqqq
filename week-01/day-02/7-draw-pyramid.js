'use strict';

const lineCount = 4;

for (let count = 1; count <= lineCount; count++) {
        console.log(' '.repeat(4-count)+"*".repeat(count*2-1));
}
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
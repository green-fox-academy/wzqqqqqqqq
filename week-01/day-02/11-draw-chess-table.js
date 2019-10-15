'user strict';

const lineCount = 8;

for (let index = 0; index < lineCount; index++) {
   console.log(' '.repeat(index%2)+"% ".repeat(lineCount/2));
}

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

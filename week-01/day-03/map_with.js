'use strict';

const mapWith = (array, callback) => {
    let output = [];

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.
    array.forEach(a => {
        output.push(callback(a));
    });
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
    var str = '';
    word = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0) {
            str = str + word[i];
        }
    }
    return str;
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
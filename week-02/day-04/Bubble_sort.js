'user strict';

let array = [1, 2, 3, 6, 7, 8, 9, 6, 5, 4, 3];
for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1 - j; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);
console.log('after bubble sort:');
console.log(array);
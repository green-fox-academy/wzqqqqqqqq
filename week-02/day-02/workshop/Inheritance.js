// Class inheritance
// Create a Playground class that is extended from the Garden class. Give it an extra toys field which should be a string array. 
// Give it an add(toy) function that stores the new toy in the toys array.

'user strict';

const Garden = require('./GardenEs5');

function Playground(width,length){
  Garden.call(this.width,length);
  this.toys = []; 
}

Playground.prototype = Object.create(Garden.prototype);

Playground.prototype.construction = Playground ;

Playground.prototype.add = function (toy) {
  this.toys.push(toy);
}

const playground = new Playground(2,2);
playground.add('dog');
console.log(playground.toys);

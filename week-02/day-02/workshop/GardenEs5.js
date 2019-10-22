// Write with both technologies a class that's named Garden,
//  has width and length as fields and the following functions: area(), circumference() and efficiency(). 
// The function called efficiency should return the result of area() / circumference().

function Garden(width, length) {
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function () {
  return this.width * this.length;
}

Garden.prototype.circumference = function () {
  return (this.width + this.length) * 2;
}

Garden.prototype.efficiency = function () {
  return this.area() / this.circumference();
}

const garden = new Garden(2, 3);
console.log(garden.area());
console.log(garden.circumference());
console.log(garden.efficiency());
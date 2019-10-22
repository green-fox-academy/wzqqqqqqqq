'user strict';
class Garden{
  constructor(width = 0 , length = 0){
    this.width = width;
    this.length = length;
  }

  area (){
    return this.width * this.length;
  }

  circumference(){
    return 2*(this.width +this.length);
  }

  efficiency(){
    return this.area()/this.circumference();
  }
}

const garden = new Garden(2, 3);
console.log(garden.area());
console.log(garden.circumference());
console.log(garden.efficiency());
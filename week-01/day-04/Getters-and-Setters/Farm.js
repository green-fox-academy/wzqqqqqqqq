// Farm
// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Animal {
    constructor(hunger = 50 ,thirst= 50) {
        this.hunger = hunger 
        this.thirst = thirst
    }
    eat(){
         this.hunger++
    }
    drink(){
        this.thirst--
    }
    play(){
        this.hunger++
        this.thirst++
    }
 }

 class Farm {
        constructor(slots = 10){
            this.animals = [new Animal(10,10),new Animal(22,22)]
            this.slots = slots
        }

        breed(){
            if (this.slots>0) {
                this.animals.push(new Animal(1,1))
            }
            this.slots --
        }

        slaughter(){
            this.slots ++
            let leastHungry = 0 ;
            for  (var i=0; i <this.animals.length;i++){
                if (this.animals[i].hunger <this.animals[leastHungry].hunger) {
                    leastHungry = i
                }
            }
            this.animals.splice(leastHungry,1);
        }
 }

 const farm = new Farm(5);
 console.log(farm);
 farm.breed();
 console.log(farm);
 farm.slaughter();
 console.log(farm);
 


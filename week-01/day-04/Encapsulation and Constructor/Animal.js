// Create an Animal class
// Every animal has a hunger and a thirst value
// When creating a new animal object, these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    constructor() {
        this.hunger = 50
        this.thirst = 50
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
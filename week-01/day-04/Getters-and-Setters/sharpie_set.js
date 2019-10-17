// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

'user strict';

const Sharpie = require('./Sharpie');

class SharpieSet {
    constructor(sharpieList) {
        this.list = sharpieList
    }
    countUsable() {
        return this.list.filter(sharpie => sharpie.inkAmount > 0).length
    }
    removeTrash() {
        this.list = this.list.filter(sharpie => sharpie.inkAmount > 0)
    }
}

const sharpies_set = new SharpieSet([
    new Sharpie('black', 111, 11),
    new Sharpie('white', 222, 0)
])

console.log(sharpies_set.countUsable())
sharpies_set.removeTrash()
console.log(sharpies_set.list)
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();

class FleetOfThings {

    constructor() {
    
    }
    main() {
        this.fleet = fleet;
        this.fleet.add(new Thing("Get milk"))
        this.fleet.add(new Thing("Remove the obstacles"))
        this.fleet.add(new Thing("Stand up"))
        this.fleet.add(new Thing("Eat lunch"))
       
        this.fleet.getThings()[2].complete()
        this.fleet.getThings()[3].complete()
        
    }

    print() {
        const things = this.fleet.getThings().map((thing, index) => {
                return `${index+1}. [${thing.getCompleted()?'x':' '}] ${thing.getName()}`
            }
        )
        console.log(things.join('\n'))
    }
}

const FOT = new FleetOfThings()
FOT.main();
FOT.print();
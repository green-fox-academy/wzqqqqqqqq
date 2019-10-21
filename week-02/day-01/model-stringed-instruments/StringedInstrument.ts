// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable
'user strict';

import Instrument from './Instrument';

abstract class StringedInstrument extends Instrument {
	numberOfStrings: number;
	constructor(numberOfStrings: number, name: string) {
		super(name);
		this.numberOfStrings = numberOfStrings;
	}
	abstract sound(): string;

	play(): void {
		console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument goes ${this.sound()}.`);
	}

}

export default StringedInstrument;
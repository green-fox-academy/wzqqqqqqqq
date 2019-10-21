// Model stringed instruments
// We start with a base, abstract class Instrument.

// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

'user strict';

abstract class Instrument {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
	abstract play(): void;
}

export default Instrument;

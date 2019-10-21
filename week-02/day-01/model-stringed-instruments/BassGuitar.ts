import StringedInstrument from "./StringedInstrument";

'user strict';

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4, name: string = 'Bass guitar') {
    super(numberOfStrings, name);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export default BassGuitar;
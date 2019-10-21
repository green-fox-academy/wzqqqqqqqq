import StringedInstrument from "./StringedInstrument";

'user strict';

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6, name: string = 'Electric guitar') {
    super(numberOfStrings, name);
  }

  public sound(): string {
    return 'Twang';
  }
}

export default ElectricGuitar;
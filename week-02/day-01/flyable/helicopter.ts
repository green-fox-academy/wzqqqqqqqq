'user strict';

import { flyable } from "./flyable";
import { vehicle } from "./vehicle";

export default class helicopter extends vehicle implements flyable {
  constructor() {
    super(100, 'red', 'A')
  }

  land(): void {
    console.log("The helicopter is landing.");
    
    
  } fly(): void {
    console.log("The helicopter is flying.");
  }
  takeOff(): void {
    console.log("The helicopter is taking off.");
  }
}

let a  = new helicopter();
a.fly();
a.land();
a.takeOff();

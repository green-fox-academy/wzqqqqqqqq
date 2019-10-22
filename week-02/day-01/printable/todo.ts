'user strict';

import { printable } from "./printable";

class todo implements printable {
  protected todo :string;
  protected completed : boolean;

  constructor(todo:string){
    this.todo = todo;
    this.completed = false;
  }
}


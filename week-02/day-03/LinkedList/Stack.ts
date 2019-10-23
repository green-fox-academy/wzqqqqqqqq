import { interfaceStack } from "./Interface";

class Stack implements interfaceStack {
  items: string[];

  constructor() {
    this.items = [];
  }

  empty(): boolean {
    return (this.items.length === 0);
  }

  peek(): string {
    if (this.empty()) {
      return undefined;
    } else {
      return this.items[ this.items.length - 1 ];
    }
  }
  
  push(value:string):void{
    this.items.push(value);
  }

  pop():string{
    if (this.empty()) {
      return undefined;
    } else {
      return this.items.pop();
    }
  }

}

export {Stack};

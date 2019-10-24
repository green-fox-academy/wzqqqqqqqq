'user strict';
import { interfaceQueue } from "./Interface";

class Queue implements interfaceQueue {
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
      return this.items[ 0 ];
    }
  }

  add(value: string): void {
    this.items.push(value);
  }

  remove(): string {
    if (this.empty()) {
      return undefined;
    } 
    else {
      return this.items.shift();
    }

  }

}

export { Queue };

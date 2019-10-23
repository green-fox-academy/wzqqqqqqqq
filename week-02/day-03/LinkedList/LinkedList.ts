'user strict';

import { interfaceLinkedList } from "./Interface";
import { Node } from "./Node";

class linkedList implements interfaceLinkedList {
  head: Node;
  listSize: number;
  currentNode: Node;

  constructor() {
    this.head = new Node("head");
    this.listSize = 0;
  }

  size(): number {
    return this.listSize;
  }

  add(value: string, index?: number): void {
    if (index || index === 0) {

      let perviousNode = this.head;

      for (let i = 0; i < index && perviousNode.nextNode; i++) {
        perviousNode = perviousNode.nextNode;
      }

      perviousNode = new Node(value);
      
    } else {
      let perviousNode = this.head;

      while (perviousNode.nextNode) {
        perviousNode = perviousNode.nextNode;
      }
      perviousNode.nextNode = new Node(value);
    }

  }

  get(index: number): string {
    if (index > this.listSize || index < 0) {
      return undefined;
    }

    let counter = -1;
    let currentNode = this.head;

    while (currentNode.nextNode && counter < index) {
      currentNode = currentNode.nextNode;
      counter = counter + 1;
    }

    return currentNode.element;
  }

  removeItem(value: string): void {
    let perviousNode = this.head;

    while (perviousNode.nextNode && perviousNode.nextNode.element !== value) {
      perviousNode = perviousNode.nextNode;
    }

    perviousNode.nextNode = (perviousNode.nextNode).nextNode;
  }

  remove(index: number): string {
    let currentNode = this.head;
    let counter = -1;

    while (counter < (index - 1) && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      counter = counter + 1;
    }

    let temp = currentNode.nextNode;
    temp.nextNode = (currentNode.nextNode).nextNode;
    this.listSize = this.listSize - 1;

    return temp.element;
  }

}
export { linkedList };


'user strict';

class Node {
  public element: string;
  public nextNode: Node;

  constructor(element: string, nextNode: Node = null) {
    this.element = element;
    this.nextNode = nextNode;
  }
}

export { Node };
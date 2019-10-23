'user strict';

interface interfaceLinkedList {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

interface interfaceStack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

interface interfaceQueue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

interface interfaceTree {
  empty(): boolean;
  add(value: string): void;
  remove(value: string): void;
  search(value: string): boolean
}

export { interfaceLinkedList, interfaceStack, interfaceQueue, interfaceTree }
import Sorter from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export default class LinkedList extends Sorter {
  head: Node | null = null;

  constructor() {
    super();
  }

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;

    // if we want the comiler to refer to its type rather
    // than adding a type annotation, it will only know that
    // the type of node here is Node. But node can either be
    // Node or null
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

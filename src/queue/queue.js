/* eslint-disable @typescript-eslint/no-unused-vars */

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Adding new element to the queue
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // Removing item  from the front of the queue
  dequeue() {
    if (this.isEmpty()) throw Error("Queue is empty");
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // return the item from the front of the queue
  peek() {
    if (this.isEmpty()) throw Error("Queue is empty");
    return this.items[this.lowestCount];
  }

  //
  size() {
    return this.count - this.lowest;
  }

  // returns true if the queue is empty,and false otherwise:
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return "";
    let objStr = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objStr += `,${this.items[i]}`;
    }
    return objStr;
  }
}

// const queue = new Queue();

// queue.enqueue(23);
// queue.enqueue(24);
// queue.enqueue(25);
// queue.enqueue(26);
// queue.enqueue(27);
// queue.enqueue(28);

// console.log("🚀 ~ queue:", queue);

// queue.dequeue();
// queue.dequeue();
// queue.dequeue();

// console.log("🚀 ~ queue:", queue);

// queue.enqueue(54);

// console.log("🚀 ~ queue:", queue);

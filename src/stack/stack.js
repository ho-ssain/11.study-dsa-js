/* eslint-disable @typescript-eslint/no-unused-vars */
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

const stack = new Stack();

stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);

console.log("🚀 ~ stack:", stack);
console.log(`Pop item: ${stack.pop()}`); // Output: Pop item: 15
console.log("🚀 ~ stack:", stack);

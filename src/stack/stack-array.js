/* eslint-disable @typescript-eslint/no-unused-vars */

class Stack {
  constructor() {
    this.items = [];
  }

  push(...element) {
    // adds a new element (or several elements) to the top of the stack.
    this.items.push(...element);
  }

  pop() {
    // removes the top element from the stack. It also returns the removed element.
    return this.items.pop();
  }

  peek() {
    // returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes).
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
    return this.items.length === 0;
  }

  clear() {
    // removes all the elements of the stack.
    this.items = [];
  }

  size() {
    // returns the number of elements that the stack contains. It is similar to the length property of an array.
    return this.items.length;
  }
}

const stack = new Stack();
console.log("🚀 ~ stack:", stack.isEmpty()); // true

stack.push(10);
stack.push(11);

console.log("🚀 ~ stack:", stack.peek());

stack.push(12, 13, 14);
console.log("🚀 ~ stack:", stack);

console.log("🚀 ~ stack:", stack.size());
console.log("🚀 ~ stack:", stack.isEmpty()); // false

stack.push(34);
console.log("🚀 ~ stack:", stack.size());

stack.pop();
stack.pop();
console.log("🚀 ~ stack:", stack.size());

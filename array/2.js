// Inserting an element in the first position
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.insertFirstPosition = function (value) {
  for (let index = this.length; index > 0; index--) {
    this[index] = this[index - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(-1);

// unshift method
numbers.unshift(-3, -2);

console.log(numbers);

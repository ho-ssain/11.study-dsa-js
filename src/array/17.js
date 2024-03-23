// Searching

let numbers = [1, 2, 26, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 4, 14, 15, 26];

// console.log(numbers.indexOf(4));
// console.log(numbers.lastIndexOf(4));

const multipleOf3 = (element, index, array) => element % 13 === 0;

console.log(numbers.find(multipleOf3));

console.log(numbers.findIndex(multipleOf3));

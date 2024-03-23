// we will use an array with values from 1 to 15 and a function that returns true if the number is a multiple of 2 (even) and false otherwise.

const isEven = (x) => x % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.every(isEven);
numbers.some(isEven);
numbers.forEach(isEven);

const mapRes = numbers.map(isEven);
console.log("🚀 ~ mapRes:", mapRes);

const filterRes = numbers.filter(isEven);
console.log("🚀 ~ filterRes:", filterRes);

const reduceRes = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("🚀 ~ reduceRes:", reduceRes);

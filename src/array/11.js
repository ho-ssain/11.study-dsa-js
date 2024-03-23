// the from method  is used to create a new object instance from  an existing object.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let numbers2 = Array.from(numbers);

let even = Array.from(numbers, (x) => x % 2 == 0);

// console.log(numbers2);
// console.log(even);

// the Array.of () method creates a new array from the arguments passed to the method.

let number3 = Array.of(1);
// console.log("🚀 ~ number3:", number3);
let number4 = Array.of(1, 2, 3, 4, 5);
// console.log("🚀 ~ number4:", number4);

// We can also use this method to make a copy of an existing array. The following is an example:

let number4Copy = Array.of(...number4);
// console.log("🚀 ~ number4Copy:", number4Copy);

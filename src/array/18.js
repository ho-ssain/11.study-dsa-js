// The includes method returns true if an element is found in the array, and false otherwise.
// The following code is an example of how to use this method:

let numbers = [2, 3, 4, 5];

console.log(numbers.includes(2));
console.log(numbers.includes(14));

// it also possible to pass a starting index where we want the array to start  searching for the value

let number2 = [1, 3, 4, 3, 53, 34, 4, 23];
console.log(number2.includes(3, 4));

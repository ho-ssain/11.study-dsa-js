// Adding and removing elements from a specific position

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(3, 3);
console.log("🚀 ~ numbers:", numbers);

numbers.splice(3, 0, 30, 40, 50);
console.log("🚀 ~ numbers:", numbers);

numbers.splice(9, 2, 80, 90);
console.log("🚀 ~ numbers:", numbers);

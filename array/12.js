// using the fill method

// fill method fill the object with values

let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);

numbersCopy.fill(0);
console.log("🚀 ~ numbersCopy:", numbersCopy);

numbersCopy.fill(7, 1, 4);
console.log("🚀 ~ numbersCopy:", numbersCopy);

/* 
The fill method is great when we want to create an array and initialize its
values, as demonstrated:
 */

let ones = Array(6).fill(1);
console.log("🚀 ~ ones:", ones);

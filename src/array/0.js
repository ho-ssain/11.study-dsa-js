// What is array?
// --> An array is the simplest memory data structure. It stores values that are all of the same datatype sequentially.

// Creating and initializing arrays

let daysOfWeek = new Array(); //......(1)
daysOfWeek = new Array(7); //.........(2)
daysOfWeek = new Array( //............(3)
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

daysOfWeek = []; //...................(4)
daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //................................(5)

/* console.log(daysOfWeek.length); */

//
//
//

// Accessing elements and inserting an array

// We want to output all the elements of the daysOfWeek array.

/* for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
} */

//
//
//

// we want to find out the 1st 20 numbers of the Fibonacci sequence. The 1st 2 numbers of this sequence is 0 and 1, and each subsequent number is the sum of thr previous two numbers.
const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

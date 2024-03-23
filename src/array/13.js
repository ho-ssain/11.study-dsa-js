// Using the copyWithin method
/* 
The copyWithin method copies a sequence of values of the array into the position
of a start index. For example, let's consider the following array: */

let copyArray = [1, 2, 3, 4, 5, 6];

/*
Now, let's say we want to copy the values 4, 5, and 6 to the first three positions of
the array, resulting in the [4,5,6,4,5,6] array. We can use the following code to
achieve this result: 
*/

copyArray.copyWithin(0, 3);
console.log("🚀 ~ copyArray:", copyArray);

copyArray.copyWithin(1, 3, 5);
console.log("🚀 ~ copyArray:", copyArray);

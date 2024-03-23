// Sorting strings

let names = ["Ana", "ana", "John", "john"];
// console.log(names.sort());

names.sort((a, b) => a.toLowerCase - b.toLowerCase);
console.log("🚀 ~ names:", names);

names.sort((a, b) => a.localeCompare(b));
console.log("🚀 ~ names:", names);

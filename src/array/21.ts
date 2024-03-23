// Arrays in TypeScript

const numbers: number[] = [1, 2, 3, 4, 5];

// If we go back to the sorting example of the friends array, we can refactor the code to the following in TypeScript:

interface Person {
  name: string;
  age: number;
}

const friends: { name: string; age: number }[] = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

function comparePerson(a: Person, b: Person) {
  // content of the comparePerson function
}

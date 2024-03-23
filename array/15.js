// Custom sorting

const friends = [
  { name: "Rail", age: 27 },
  { name: "John", age: 25 },
  { name: "Sara", age: 22 },
];

friends.sort((a, b) => a.age - b.age);
console.log("🚀 ~ friends:", friends);

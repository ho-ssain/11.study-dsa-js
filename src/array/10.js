// Array entries, keys and values

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries();

for (const v of aEntries) {
  console.log(v);
}

let aKeys = numbers.keys();

for (const k of aKeys) {
  console.log(k);
}

let aValues = numbers.values();

for (const v of aValues) {
  console.log(v);
}

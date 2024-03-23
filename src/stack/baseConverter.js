import Stack from "./stack.js";

function baseConverter(desNumber, base) {
  const remStack = new Stack();
  let number = desNumber;
  let rem;
  let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let baseString = "";

  if (!(base >= 2 && base <= 36)) return "";

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0

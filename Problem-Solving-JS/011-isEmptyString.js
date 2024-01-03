 // isEmptyString.js

function isEmptyString(str) {
  return str.trim() === '';
}

// Example usage
const emptyString = "";
const nonEmptyString = "Hello, World!";

console.log(isEmptyString(emptyString)); // true
console.log(isEmptyString(nonEmptyString)); // false

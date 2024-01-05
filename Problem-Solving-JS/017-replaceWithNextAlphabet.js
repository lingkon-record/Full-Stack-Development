 // replaceWithNextAlphabet.js

function replaceWithNextAlphabet(inputString) {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);

    if (currentChar >= 'a' && currentChar < 'z') {
      result += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    } else if (currentChar >= 'A' && currentChar < 'Z') {
      result += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    } else if (currentChar === 'z') {
      result += 'a';
    } else if (currentChar === 'Z') {
      result += 'A';
    } else {
      result += currentChar; // Keep non-alphabetic characters unchanged
    }
  }

  return result;
}

// Example usage
const originalString = "Hello, World!";

const modifiedString = replaceWithNextAlphabet(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Modified String: ${modifiedString}`);

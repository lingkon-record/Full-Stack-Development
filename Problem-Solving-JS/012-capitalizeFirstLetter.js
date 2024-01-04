  // capitalizeFirstLetter.js

function capitalizeFirstLetter(inputString) {
  const words = inputString.split(' ');

  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return '';
    }
  });

  return capitalizedWords.join(' ');
}

// Example usage
const originalString = "capitalize the first letter";

const modifiedString = capitalizeFirstLetter(originalString);

console.log(`Original String: ${originalString}`);
console.log(`Modified String: ${modifiedString}`);

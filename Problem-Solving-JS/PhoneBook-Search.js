
// Array of Pakistani names
const pakistaniNames = [
  "Ali",
  "Ahmed",
  "Amna",
  "Bilal",
  "Bushra",
  // Add more names as needed...
];

// Function to filter names based on the first letter
function filterNamesByFirstLetter(letter) {
  return pakistaniNames.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()));
}

// Example usage:
const inputLetter = "A"; // Example input letter
const namesStartingWithA = filterNamesByFirstLetter(inputLetter);
console.log(namesStartingWithA.join(', '));

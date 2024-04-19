// last letter match

// Array of Pakistani names
const pakistaniNames = [
  "Ali",
  "Ahmed",
  "Amna",
  "Bilal",
  "Bushra",
  // Add more names as needed...
];

// Function to filter names based on the last letter
function filterNamesByLastLetter(letter) {
  return pakistaniNames.filter(name => name.toLowerCase().endsWith(letter.toLowerCase()));
}

// Example usage:
const inputLetter = "a"; // Example input letter
const namesEndingWithI = filterNamesByLastLetter(inputLetter);
console.log(namesEndingWithI.join(', '));

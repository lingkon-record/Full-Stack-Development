// Return the number of vowels in a string

function countVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

// Example usage
const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);

console.log(numberOfVowels);



// easier 

function countVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g) || [];
  return vowels.length;
}

// Example usage
const inputString = "Hello, World!";
const numberOfVowels = countVowels(inputString);

console.log(numberOfVowels);

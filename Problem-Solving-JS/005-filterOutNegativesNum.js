function filterOutNegatives(arr) {
  return arr.filter(num => num >= 0);
}

// Example usage
const numbers = [5, -2, 8, -1, 3];
const positiveNumbers = filterOutNegatives(numbers);

console.log(positiveNumbers);

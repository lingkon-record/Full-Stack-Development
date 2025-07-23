function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arraySum;
}

// Example usage:
const numbers = [1, 2, 4, 5, 6]; // 3 is missing
console.log("Missing number:", findMissingNumber(numbers)); // Output: 3

const originalArray = [23, 11, 1, 5, 3, 12, 10, 12, 7, 5, 6];

// Create a new array with numbers in ascending order
const sortedArray = originalArray.slice().sort((a, b) => a - b);

console.log(sortedArray);



// Create a new array with numbers in descending order
const sortedArrayDescending = originalArray.slice().sort((a, b) => b - a);

console.log(sortedArrayDescending);


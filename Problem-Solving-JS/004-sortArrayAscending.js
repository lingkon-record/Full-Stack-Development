// Sort an array from lowest to highest

const numbers = [5, 2, 8, 1, 3];

// Using the sort method
const sortedNumbers = numbers.slice().sort((a, b) => a - b);

console.log(sortedNumbers);


// Next 

const numbers = [5, 2, 8, 1, 3];

// Using the sort method
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);


// function

function sortArrayAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}

const numbers = [5, 2, 8, 1, 3];
const sortedNumbers = sortArrayAscending(numbers);

console.log(sortedNumbers);

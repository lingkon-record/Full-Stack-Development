// Create a function that reverses an array

function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);


// next

function reverseArray(arr) {
  return arr.slice().reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);

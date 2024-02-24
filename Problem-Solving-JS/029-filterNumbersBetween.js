 function filterNumbersBetween(arr, min, max) {
    return arr.filter(number => number > min && number < max);
}

// Example usage:
const inputArray = [50, 120, 200, 90, 450, 600];
const filteredArray = filterNumbersBetween(inputArray, 100, 500);

console.log("Original array:", inputArray);
console.log("Filtered array (numbers between 100 and 500):", filteredArray);

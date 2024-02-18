// Function to find the 10th element in an object
function find10thInObject(obj) {
    const keys = Object.keys(obj);
    return keys.length >= 10 ? obj[keys[9]] : undefined;
}

// Function to find the 10th element in an array
function find10thInArray(arr) {
    return arr.length >= 10 ? arr[9] : undefined;
}

// Example usage
const exampleObject = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11 };
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const resultObject = find10thInObject(exampleObject);
const resultArray = find10thInArray(exampleArray);

console.log('10th element in object:', resultObject);
console.log('10th element in array:', resultArray);

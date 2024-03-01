function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                        return i; // Return the index of the target element if found
                                }
                                    }
                                        return -1; // Return -1 if the target element is not found
                                        }
// Example usage:
const array = [3, 6, 9, 2, 5];
const targetElement = 9;
console.log(`Index of ${targetElement} is: ${linearSearch(array, targetElement)}`); // Output: Index of 9 is: 2

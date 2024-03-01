function binarySearch(arr, target) {
    let left = 0;
        let right = arr.length - 1;
    while (left <= right) {
            const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
                    return mid; // Return the index of the target element if found
                            } else if (arr[mid] < target) {
                                        left = mid + 1;
                                                } else {
                                                            right = mid - 1;
                                                                    }
                                                                        }
    return -1; // Return -1 if the target element is not found
    }
// Example usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetElement = 23;
console.log(`Index of ${targetElement} is: ${binarySearch(sortedArray, targetElement)}`); // Output: Index of 23 is: 5

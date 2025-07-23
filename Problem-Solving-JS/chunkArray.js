function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Example usage:
const data = [1, 2, 3, 4, 5, 6, 7];
const chunked = chunkArray(data, 3);
console.log(chunked); // Output: [ [1,2,3], [4,5,6], [7] ]

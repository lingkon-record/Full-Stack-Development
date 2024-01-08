function getType(input) {
  return typeof input;
}

// Example usage:
const result = getType("Hello, World!");
console.log(result); // Output: string





// example 2

function getTypes(...args) {
  return args.map((arg) => typeof arg);
}

// Example usage:
const results = getTypes("Hello", 42, true, undefined, { key: "value" });
console.log(results); // Output: ['string', 'number', 'boolean', 'undefined', 'object']

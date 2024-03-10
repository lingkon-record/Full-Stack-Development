// Primitive Data Types


// 1. String
let str = "Hello, World!";

// 2. Number
let num = 42;

// 3. Boolean
let isTrue = true;

// 4. Null
let nullValue = null;

// 5. Undefined
let undefinedValue;

// 6. Symbol (ES6+)
let symbolValue = Symbol("uniqueSymbol");






// Non-Primitive Data Types (Objects)

// 1. Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// 2. Array
let colors = ["Red", "Green", "Blue"];

// 3. Function
function greet(name) {
  return `Hello, ${name}!`;
}

// 4. Date
let currentDate = new Date();

// 5. Regular Expression
let regex = /pattern/;

// 6. Map (ES6+)
let myMap = new Map();

// 7. Set (ES6+)
let mySet = new Set();




// Printing values to the console
console.log("Primitive Data Types:");
console.log(typeof str, str);
console.log(typeof num, num);
console.log(typeof isTrue, isTrue);
console.log(typeof nullValue, nullValue);
console.log(typeof undefinedValue, undefinedValue);
console.log(typeof symbolValue, symbolValue);

console.log("\nNon-Primitive Data Types (Objects):");
console.log(typeof person, person);
console.log(typeof colors, colors);
console.log(typeof greet, greet);
console.log(typeof currentDate, currentDate);
console.log(typeof regex, regex);
console.log(typeof myMap, myMap);
console.log(typeof mySet, mySet);

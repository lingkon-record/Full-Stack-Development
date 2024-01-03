// Calculate the sum of numbers within an array

const numbers = [2, 4, 6, 8, 10];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);



// Next

const numbers = [2, 4, 6, 8, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);



// Next

const numbers = [2, 4, 6, 8, 10];
let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum);

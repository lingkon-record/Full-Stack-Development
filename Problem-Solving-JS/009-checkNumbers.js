// checkNumber.js

function checkNumber(value) {
  if (value <= 100) {
    console.log(`${value} is less than or equal to 100.`);
  } else {
    console.log(`${value} is greater than 100.`);
  }
}

// Example usage
const number1 = 75;
const number2 = 120;

checkNumber(number1);
checkNumber(number2);



// checkNumbers.js

function checkNumbers(numbers) {
  numbers.forEach(number => {
    if (number <= 100) {
      console.log(`${number} is less than or equal to 100.`);
    } else {
      console.log(`${number} is greater than 100.`);
    }
  });
}

// Example usage
const numberArray = [75, 120, 90, 150, 50];

checkNumbers(numberArray);

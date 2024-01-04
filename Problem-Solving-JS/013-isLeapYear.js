function isLeapYear(year) {
  // Leap year is divisible by 4
  // If divisible by 100, it should also be divisible by 400

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

// Example usage
const yearToCheck = 2024;

if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}

var currentDate = new Date();

var birthYear = 2001;
var birthMonth = 7; // January is 0, February is 1, ..., December is 11
var birthDay = 23;

// Create a Date object for your birthdate
var birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Subtract 1 from the month because months are zero-indexed

// Calculate the difference in milliseconds between the current date and your birthdate
var difference = currentDate - birthDate;

// Convert the difference from milliseconds to years
var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)); // 365.25 days in a year to account for leap years

console.log("Lingkon, Your age is: " + age);

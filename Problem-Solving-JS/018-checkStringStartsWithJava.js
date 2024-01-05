// checkStringStartsWithJava.js

function checkStringStartsWithJava(inputString) {
  const startsWithJava = inputString.startsWith('Java');

  if (startsWithJava) {
    console.log(`${inputString} starts with 'Java'.`);
  } else {
    console.log(`${inputString} does not start with 'Java'.`);
  }
}

// Example usage
const string1 = "JavaScript is fun!";
const string2 = "JavaBeans are tasty.";

checkStringStartsWithJava(string1);
checkStringStartsWithJava(string2);

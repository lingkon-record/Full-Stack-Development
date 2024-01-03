 // compareStringByCount.js

function compareStringByCount(str1, str2) {
  const count1 = str1.length;
  const count2 = str2.length;

  if (count1 === count2) {
    console.log(`${str1} and ${str2} have the same number of characters.`);
  } else {
    console.log(`${str1} and ${str2} have a different number of characters.`);
  }
}

// Example usage
const string1 = "hello";
const string2 = "world";

compareStringByCount(string1, string2);

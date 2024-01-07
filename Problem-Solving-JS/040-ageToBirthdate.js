// age type then see birth year.
function convertAgeToDate(age) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  // Assuming birthday is on January 1st
  const birthdate = new Date(birthYear, 0, 1);

  return birthdate;
}

// Example usage
const age = 25;
const birthdate = convertAgeToDate(age);

console.log(birthdate.toDateString());

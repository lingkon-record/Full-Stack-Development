 function getRandomDate() {
  const randomYear = Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000; // Adjust the range as needed
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming all months have up to 28 days

  return `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;
}

const uniqueDateString = getRandomDate();
console.log(uniqueDateString);

 function isFirstJanuarySunday(year) {
  const januaryFirst = new Date(year, 0, 1);
  return januaryFirst.getDay() === 0; // 0 represents Sunday in JavaScript Date object
}

// Check for each year between 2014 and 2050
for (let year = 2014; year <= 2050; year++) {
  if (isFirstJanuarySunday(year)) {
    console.log(`January 1st, ${year} will be a Sunday.`);
  }
}

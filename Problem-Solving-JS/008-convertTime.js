

function minutesToSeconds(minutes) {
  return minutes * 60;
}

function hoursToMinutes(hours) {
  return hours * 60;
}

// Example usage
const minutesValue = 5;
const secondsResult = minutesToSeconds(minutesValue);

const hoursValue = 2;
const minutesResult = hoursToMinutes(hoursValue);

console.log(`${minutesValue} minutes is ${secondsResult} seconds.`);
console.log(`${hoursValue} hours is ${minutesResult} minutes.`);

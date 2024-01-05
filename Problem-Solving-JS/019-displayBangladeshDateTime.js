// displayBangladeshDateTime.js

function displayBangladeshDateTime() {
  const options = {
    timeZone: 'Asia/Dhaka',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const now = new Date();
  const bangladeshDateTime = now.toLocaleString('en-US', options);

  console.log(`Current date and time in Bangladesh: ${bangladeshDateTime}`);
}

// Example usage
displayBangladeshDateTime();

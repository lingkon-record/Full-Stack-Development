 // Function to get a new running date with running time
function getRunningDate() {
  const now = new Date(); // Get the current date and time
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options); // Format the date
  const timeStr = now.toLocaleTimeString('en-US'); // Format the time
  return `${dateStr} at ${timeStr}`; // Concatenate the date and time
}

// Example usage
const runningDate = getRunningDate();
console.log("Next running date and time:", runningDate);

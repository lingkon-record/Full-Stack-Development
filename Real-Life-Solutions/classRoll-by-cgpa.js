
// Sample JSON data containing Pakistani student results with CGPA
const studentResults = [
  { "name": "Ali", "cgpa": 3.8 },
  { "name": "Sara", "cgpa": 3.5 },
  { "name": "Ahmed", "cgpa": 3.9 },
  { "name": "Fatima", "cgpa": 3.7 },
  { "name": "Hassan", "cgpa": 3.6 },
  // Add more student data as needed
];

// Function to sort students based on CGPA and assign positions
function assignPositions(results) {
  // Sort students based on CGPA in descending order
  results.sort((a, b) => b.cgpa - a.cgpa);

  // Assign positions to students
  results.forEach((student, index) => {
    student.position = index + 1;
  });

  return results;
}

// Get positions based on CGPA
const rankedStudents = assignPositions(studentResults);

// Log positions of students to the console
console.log("Positions based on CGPA:");
rankedStudents.forEach(student => {
  console.log(`Position ${student.position}: ${student.name} - CGPA: ${student.cgpa}`);
});

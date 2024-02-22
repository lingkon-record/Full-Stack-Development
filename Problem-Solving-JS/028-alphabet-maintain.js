
let students = [
  { name: 'Ali' },
  { name: 'Zainab' },
  { name: 'Ahmed' },
  { name: 'Sana' },

];

// Function to sort students based on alphabet index
function sortStudentsAlphabetically(studentsArray) {
  return studentsArray.sort((a, b) => a.name.localeCompare(b.name));
}

// Sorted array based on alphabet index
let sortedStudents = sortStudentsAlphabetically(students);

// Output the sorted list
sortedStudents.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name}`);
});

const peopleData = [
  { name: 'John', country: 'India', age: 25 },
  { name: 'Alice', country: 'India', age: 17 },
  { name: 'Bob', country: 'USA', age: 20 },
  // Add more people and their information as needed
];

function filterAndCategorizePeople(peopleArray) {
  const india18Plus = peopleArray.filter(person => person.country === 'India' && person.age > 18);
  const indiaBelow18 = peopleArray.filter(person => person.country === 'India' && person.age <= 18);

  return { india18Plus, indiaBelow18 };
}

// Example usage:
const { india18Plus, indiaBelow18 } = filterAndCategorizePeople(peopleData);

console.log('People from India above 18:');
console.log(india18Plus);

console.log('\nPeople from India 18 and below:');
console.log(indiaBelow18);

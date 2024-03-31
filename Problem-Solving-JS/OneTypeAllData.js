// from Arrays : one type but all data get
// Sample big array containing person data
const bigArray = [
  { name: "Alice", location: "New York", food: "Pizza" },
  { name: "Bob", location: "Los Angeles", food: "Sushi" },
  { name: "Charlie", location: "London", food: "Fish and Chips" },
  // Add more person objects as needed
];

// Function to print all favorite foods to the console
function printFavoriteFoods(array) {
  array.forEach(person => {
    console.log(person.food);
  });
}

// Call the function with the big array
printFavoriteFoods(bigArray);

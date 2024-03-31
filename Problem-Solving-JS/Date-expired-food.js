
const foodArray = [
  { name: "Apple", weight: "100g", price: 1.5, expiryDate: "2025-03-30" },
  { name: "Banana", weight: "120g", price: 2, expiryDate: "2024-03-31" },
  { name: "Orange", weight: "150g", price: 1.8, expiryDate: "2024-03-28" },
  { name: "Grapes", weight: "200g", price: 3.5, expiryDate: "2024-03-29" },
  { name: "Strawberry", weight: "50g", price: 2.2, expiryDate: "2024-03-25" },
  { name: "Pineapple", weight: "500g", price: 4, expiryDate: "2024-03-30" },
  { name: "Kiwi", weight: "80g", price: 1.7, expiryDate: "2024-03-27" },
  { name: "Mango", weight: "200g", price: 2.5, expiryDate: "2024-03-29" },
  { name: "Peach", weight: "120g", price: 2.3, expiryDate: "2024-03-26" },
  { name: "Watermelon", weight: "1kg", price: 5, expiryDate: "2024-09-28" }
  
];


function getExpiredFoods(foods) {
  const today = new Date();
  const expiredFoods = foods.filter(food => {
    const expiryDate = new Date(food.expiryDate);
    return expiryDate < today; // Compare with today's date
  });
  return expiredFoods.map(food => food.name); // Return only the names of expired foods
}



const expiredFoodNames = getExpiredFoods(foodArray);


console.log("Expired foods:", expiredFoodNames);

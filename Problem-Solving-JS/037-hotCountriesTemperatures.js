 // Define an object to store temperatures of hot countries
var hotCountriesTemperatures = {
  "India": 40,
  "Australia": 38,
  "Saudi Arabia": 45,
  "Brazil": 36,
  "Egypt": 42
};

// Function to sort temperatures from high to low and list them serial by serial
function listTemperatures(obj) {
  var sortable = [];
  
  for (var country in obj) {
    sortable.push([country, obj[country]]);
  }
  
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  
  sortable.forEach(function(item, index) {
    
    console.log((index + 1) + ". " + item[0] + ": " + item[1] + "°C");
  });
}

// Call the function to list temperatures from high to low
listTemperatures(hotCountriesTemperatures);

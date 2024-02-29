 // Define an array of objects containing information about Pakistani people living in different cities in Bangladesh

const people = [
    { name: "Ali", city: "Dhaka" },
    { name: "Ahmed", city: "Chittagong" },
    { name: "Fatima", city: "Sylhet" },
    { name: "Hassan", city: "Khulna" },
    { name: "Ayesha", city: "Rajshahi" },
    { name: "Zainab", city: "Barisal" },
    { name: "Omar", city: "Dhaka" },
    { name: "Sana", city: "Chittagong" },
    { name: "Khalid", city: "Khulna" },
    { name: "Sadia", city: "Sylhet" }
];

// Function to filter and display people based on the provided city
function getPeopleByCity(city) {
    const peopleInCity = people.filter(person => person.city === city);
    if (peopleInCity.length > 0) {
        console.log(`People living in ${city}:`);
        peopleInCity.forEach(person => console.log(person.name));
    } else {
        console.log(`No people found living in ${city}.`);
    }
}

// Example usage:
getPeopleByCity("Dhaka");
getPeopleByCity("Chittagong");
getPeopleByCity("Sylhet");

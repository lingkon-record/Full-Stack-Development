
const generations = [
  {
    name: "Abdullah",       // Grandfather
    son: {
      name: "Karim",        // Father
      son: {
        name: "Rafiq"       // Son
      }
    }
  }
];

// Accessing -- son to grandfather
const son = generations[0].son.son.name;            // Rafiq
const father = generations[0].son.name;             // Karim
const grandfather = generations[0].name;            // Abdullah


console.log("Son's Name:", son);
console.log("Father's Name:", father);
console.log("Grandfather's Name:", grandfather);

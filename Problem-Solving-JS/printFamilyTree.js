// Define a function to create a person object
const createPerson = (name, father, mother) => ({ name, father, mother });

// Define the family tree
const familyTree = {
    "John": createPerson("John", "Michael", "Sarah"),
    "Michael": createPerson("Michael", "Peter", "Julia"),
    "Sarah": createPerson("Sarah", "Robert", "Emily"),
    "Peter": createPerson("Peter", "George", "Eva"),
    "Julia": createPerson("Julia", "David", "Sophia"),
    "Robert": createPerson("Robert", "William", "Grace"),
    "Emily": createPerson("Emily", "Henry", "Olivia")
};

// Function to print family tree
const printFamilyTree = (person, prefix = "") => {
    console.log(prefix + person.name);
    if (person.father && familyTree[person.father]) {
        console.log(prefix + "├── Father: " + person.father);
        printFamilyTree(familyTree[person.father], prefix + "│   ");
    }
    if (person.mother && familyTree[person.mother]) {
        console.log(prefix + "└── Mother: " + person.mother);
        printFamilyTree(familyTree[person.mother], prefix + "    ");
    }
};

// Print the family tree starting from John
console.log("Family Tree:");
printFamilyTree(familyTree["John"]);

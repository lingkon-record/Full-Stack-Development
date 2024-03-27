 // Sample array of objects
const people = [
    { name: "John", nationality: "American", gender: "Male", age: 25, religion: "Christianity" },
        { name: "Maria", nationality: "Italian", gender: "Female", age: 35, religion: "Catholicism" },
            { name: "Ahmed", nationality: "Egyptian", gender: "Male", age: 30, religion: "Islam" },
                { name: "Lila", nationality: "Indian", gender: "Female", age: 45, religion: "Hinduism" },
                    { name: "Pedro", nationality: "Spanish", gender: "Male", age: 50, religion: "Christianity" }
                    ];


// Filter out people who are Hindus and age over 40
const filteredPeople = people.filter(person => person.religion !== "Hinduism" && person.age <= 40);

console.log(filteredPeople);

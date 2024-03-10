// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function rest(...Name) {
     console.log(Name)
}

rest("Alo", "Jonaki", "Pakhi") 



// next example : MDN
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

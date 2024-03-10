// example-01
function rest(a,b,...eshan){
    console.log(a,b,eshan)
}
rest(1,2,3,500,600,700,900)

// example-02
const arr1 = [1,2,3]
const arr2 = [...arr1,10,20,30,40]
console.log("example-02 : ",arr2);
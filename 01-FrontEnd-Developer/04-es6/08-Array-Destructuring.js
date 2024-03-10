const arr = [1,2,3,4,5,6,7,8,9,10]
let [first, second, third, ...next] = arr

console.log(next); // 4 to 10
console.log(first,second,third,next); // 123, 4 to 10
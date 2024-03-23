
function haveSameLastDigit(numbers) {
    if (numbers.length <= 1) {
        return false; // Not enough numbers to compare
    }

    const lastDigit = numbers[0] % 10; // Get the last digit of the first number

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] % 10 !== lastDigit) {
            return false; // Found a number with a different last digit
        }
    }

    return true; // All numbers have the same last digit
}

// Example usage:
const numbers1 = [123, 456, 789]; // Different last digits
const numbers2 = [12, 22, 32]; // Same last digits

console.log("Numbers 1:", haveSameLastDigit(numbers1)); // Output: false
console.log("Numbers 2:", haveSameLastDigit(numbers2)); // Output: true

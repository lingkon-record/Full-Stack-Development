function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    }
// Example usage:
const inputSentence = "hello world javascript";
console.log(capitalizeFirstLetterOfEachWord(inputSentence)); // Output: Hello World Javascript

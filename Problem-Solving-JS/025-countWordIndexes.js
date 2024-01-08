 function countWordIndexes(sentence) {
  const words = sentence.split(' ');
  const wordCount = {};

  words.forEach((word, index) => {
    const normalizedWord = word.toLowerCase();
    if (wordCount[normalizedWord]) {
      wordCount[normalizedWord].count++;
      wordCount[normalizedWord].indexes.push(index + 1);
    } else {
      wordCount[normalizedWord] = { count: 1, indexes: [index + 1] };
    }
  });

  return wordCount;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
const result = countWordIndexes(sentence);
console.log(result);

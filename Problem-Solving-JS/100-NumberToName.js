 const letterCodes = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
  f: 6, g: 7, h: 8, i: 9, j: 10,
  k: 11, l: 12, m: 13, n: 14, o: 15,
  p: 16, q: 17, r: 18, s: 19, t: 20,
  u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function getWordFromCodes(inputCodes) {
  const resultWord = inputCodes.map(code => {
    for (const letter in letterCodes) {
      if (letterCodes[letter] === code) {
        return letter;
      }
    }
    return ''; // Handle invalid codes
  }).join('');

  return resultWord;
}

// Example input
const inputCodes = [12,9,14,7,11,15,14];
const resultWord = getWordFromCodes(inputCodes);
console.log(resultWord);

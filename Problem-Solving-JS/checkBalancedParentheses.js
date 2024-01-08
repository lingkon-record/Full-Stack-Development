 function isBalancedParentheses(str) {
  const stack = [];

  for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' && stack.pop() !== '(') {
      return false;
    } else if (char === ']' && stack.pop() !== '[') {
      return false;
    } else if (char === '}' && stack.pop() !== '{') {
      return false;
    }
  }

  return stack.length === 0;
}

// Example usages:
const balancedString1 = "{[()]()}";
const balancedString2 = "([]{})";
const unbalancedString1 = "{[()](";
const unbalancedString2 = "([)]";

console.log(isBalancedParentheses(balancedString1)); // Output: true
console.log(isBalancedParentheses(balancedString2)); // Output: true
console.log(isBalancedParentheses(unbalancedString1)); // Output: false
console.log(isBalancedParentheses(unbalancedString2)); // Output: false

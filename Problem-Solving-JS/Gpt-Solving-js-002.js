 // 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Palindrome Check
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// 3. Find the Maximum Number in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// 4. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// 5. Find Missing Number in an Array
function findMissingNumber(nums) {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// 6. Two Sum
function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return null;
}

// 7. Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 8. Factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 9. Rotate Array
function rotateArray(nums, k) {
  const rotationIndex = k % nums.length;
  const rotatedArray = nums.slice(-rotationIndex).concat(nums.slice(0, -rotationIndex));
  return rotatedArray;
}

// 10. Reverse Linked List
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

// 11. Check for Balanced Parentheses
function isValidParentheses(s) {
  const stack = [];
  const mapping = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
    if (char in mapping) {
      const topElement = stack.pop() || '#';
      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// 12. Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

// 13. Implement a Queue using Stacks
class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(value) {
    this.inputStack.push(value);
  }

  dequeue() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop();
  }

  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }

  isEmpty() {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}

// 14. Counting Elements in an Array
function countSmallerElements(nums) {
  const result = [];
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (let num of nums) {
    const index = sortedNums.indexOf(num);
    result.push(index);
    sortedNums.splice(index, 1);
  }

  return result;
}

// 15. Implement a Debounce Function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Test cases or usage examples can be added below

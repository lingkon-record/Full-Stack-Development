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

// Test cases or usage examples can be added below

// Example for problem 1:
console.log(reverseString('Hello')); // Output: olleH

// Example for problem 2:
console.log(isPalindrome('level')); // Output: true

// Example for problem 3:
console.log(findMax([2, 5, 1, 8, 3])); // Output: 8

// Example for problem 4:
fizzBuzz(15);

// Example for problem 5:
console.log(findMissingNumber([3, 0, 1])); // Output: 2

// Example for problem 6:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Example for problem 7:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// Example for problem 8:
console.log(factorial(5)); // Output: 120

// Example for problem 9:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// Example for problem 10:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(reverseLinkedList(list)); // Output: ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } } }

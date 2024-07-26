// Write a JavaScript program to reverse a given string

// Input: code

// Output: edoc

// Answer :

function reverseString(str) {
  // Split the string into an array of characters
  let charArray = str.split("");

  // Reverse the array of characters
  let reversedArray = charArray.reverse();

  // Join the array back into a string
  let reversedString = reversedArray.join("");

  // Return the reversed string
  return reversedString;
}

// Example usage:
let input = "code";
let output = reverseString(input);
console.log("Output is :", output); // Output: 'edoc'


// Write a simple function that returns a boolean(i.e True or False) indicating whether or not a string is a Palindrome.
// For example :

// Input: racecar

// Output: true

function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize pointers for start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Compare characters from start and end towards the middle
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

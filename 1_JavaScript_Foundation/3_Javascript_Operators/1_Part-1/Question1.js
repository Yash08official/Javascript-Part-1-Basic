//  Return true if a given type of the variable is an integer.

// Input: 1
// Output: true

// Input:12.3
// Output: false

// Answer :

function isInt(num) {
  return Number.isInteger(num);
}

console.log("Integer is", isInt(1));
console.log("Integer is",isInt(12.3));


// OR

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(1)); // true
console.log(isInt(12.3)); // false

// Given an array numbers, filter out even numbers, square each remaining number, and then calculate the sum of all squared numbers using map, filter, and reduce methods.

// Input: arr = [1, 2, 3, 4, 5, 6]

// Output: 56

// Explanation:2^2 + 4^2 + 6^2  = 56

const numbers = [1, 2, 3, 4, 5, 6];

const evenNum = numbers.filter((num) => num % 2 === 0);

console.log("Even Numbers are :", evenNum);

const squareNum = evenNum.map(function (x) {
  x = x * x;
  return x;
});
console.log("Square Numbers are :", squareNum);

const sumNum = squareNum.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});
console.log("Sum is", sumNum);

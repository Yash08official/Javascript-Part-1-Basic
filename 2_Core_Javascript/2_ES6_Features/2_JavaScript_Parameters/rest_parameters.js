// It is opposite of spread syntax

function sumOfAllNumbers(params) {}

// And you want to call the function with multiple values
sumOfAllNumbers(1, 2, 3, 4, 5); // Intead of doing this
// you can do like

function sumOfAllNumbers(...args) {} // that means you are collected all multiple arguments into one varaible and this is rest parameter

// (...args) ::-> You are collecting all the arguments into the one varaible now you can basically run this

function sumOfAllNumbers(...args) {
  let sum = 0;
  for (let value of args) {
    sum = sum + value; // That it will take ine value one by one
  }
  return sum;
}
const result1 = sumOfAllNumbers(1, 2, 3, 4, 5); // You are collecting it
console.log("result is", result1);

// Javascript provide us Sort method
// That sort an array alphabetically
const fruits = ["Apple", "Banana", "Orange", "Grapes"];
console.log(`fruits are ${fruits}`);
// If I apply sorting in this array , then what will happen
// The array will be sorted in alphabetical order
fruits.sort();
console.log(`After sorting fruits are : ${fruits}`);

// There is another method called "toSorted"
// When you used toSorted the new array gets created and original array is not effected
const fruits1 = ["Apple", "Banana", "Orange", "Grapes"];
// If I apply toSorted in this array , then what will happen
// The array will be sorted in alphabetical order and original array will not be affected
console.log(`After toSorted fruits are : ${fruits1.toSorted()}`);

// Reversed method
// This method reverse the array
const fruits2 = ["Apple", "Banana", "Orange", "Grapes"];
console.log(`fruits are ${fruits2}`);
// If I apply reversed in this array , then what will happen (Descending order)
// The array will be reversed
console.log(`After reversed fruits are : ${fruits2.reverse()}`);

// Now toReversed method
// This method reverse the array
// But it will create a new array and original array will not be affected
const fruits3 = ["Apple", "Banana", "Orange", "Grapes"];
console.log(`fruits are ${fruits3}`);
// If I apply toReversed in this array , then what will happen (Descending order)
// The array will be reversed and original array will not be affected
console.log(`After toReversed fruits are : ${fruits3.toReversed()}`);

// but if
const num = ["11", "321", "43", "65", "14"];
num.sort();
// If I print this array
console.log(num);
// Let say
const num1 = [111, 23, 21, 14, 32];
num1.sort();
// If I print this
console.log(num1);
// In case of numerical sorting output is not correct

// For that we have one more thing which is compare function is JavaScript
const yas = [11, 232, 111, 342, 125, 121];
console.log("Before applying compare function :", yas);
// It helps us to do the numerical sorting #Compare function
yas.sort(function (a, b) {
  return a - b;
});
// This function is called as compare functions
// This function compare two numbers then it sorts like it keeps a -b then subtract it and if the
// result is negative
// it will keep a before b if it positive then it will keep a after b and lastly if same then write as it is
console.log("After applying the compare function the result is :", yas);

// If you have to sort any array in descending order then you can write the compare function as
// Array.sort(function (a, b) {
//   return b - a;
// });


// JavaScript also provide you math.min method to finding the minimum element in the array
// Math.min
// It takes the element and values in the array
// Like
console.log(Math.min(11, 232, 111, 342, 125));
// Similarly we have Math.max to find max value in the array
// Math.max
console.log("Value",Math.max(11, 232, 111, 342, 125));
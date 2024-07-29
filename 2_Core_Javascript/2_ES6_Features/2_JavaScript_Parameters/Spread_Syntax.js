// You have an array and you have passing that array
//Suppose you have function here, where you are

function multiply(i, j) {
  return i * j;
}
// and lets say you have an array where you have two numbers
const array = [2, 8]; // Take all the elements from array
const mul = multiply(...array); // here ::-> (...array)
console.log("result is :", mul);

//If you have an array and you put it [2, 8] and add  (...array) it will multiply all array

const arr = [1, 2, 3, 4]; // You have array
const obj = { ...arr }; // You put array in a object
console.log("Output is :", obj);
// You will get the output like this ::-> Output is : { '0': 1, '1': 2, '2': 3, '3': 4 }

// array are converted into an object by using this
// End

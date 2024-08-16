// We know we can assigned a function to a variable in function expression that means if I am
// doing it like , I can assign a function to a variable

var a = function () {
  console.log("A is a function");
};

// we can also pass a function to parameter to another function let say I have function

function x() {
  // Let say If I do
  console.log("X is a function");
  //That  means I can assign a function as a value to the variable
}
// And I also have another function which taking this function as a parameter

function y(x) {
  // and I can also call this function from here and also return a function here
  return x;
  x();
}
//If I calling a function Y and pass function X inside it and collect it
const func = y(x);
// Call it 
func();

// a function :
// You can pass a function as a value
// You can used a function as a value
//You can pass one function inside another function
// You can also return a function from a function
// This is called as first class function
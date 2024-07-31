//Example

var z = 10; //1. In the memory allocation phase {In short memory allocated in memory allocation phase}, memory allocated to the variable Z
//{z : undefined}
x(); //2. function "X" call then complete memory allocted to function X
y(); //3. function call "Y" and similary for function Y complete memory allocted
console.log("First output is :", z);

function x() {
  var z = 20;
  console.log("Function X output is :", z);
}

function y() {
  var z = 20;
  console.log("Function Y output is :", z);
}

// We know that we have a call stack and in this  our global execution context gets push
// when the code execution starts
// first line is Var z = 10; the value of z  first this line is execute var z = 10 that means 10 has to assign the value to the variable z and insted of undefined we will put 10

// Next is function invokation, whenever a function is invoke another execution context gets created for that function like function calling X then the another execution gets created

// Output :

// Function X output is : 20
// Function Y output is : 20
// First output is : 10

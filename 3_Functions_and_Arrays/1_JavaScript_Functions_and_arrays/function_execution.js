//Example

var z = 10; //1. In the memory allocation phase {In short memory allocated in memory allocation phase},
// memory allocated to the variable Z
//{z : undefined}
x(); //2. function "X" call then complete memory allocated to function X
y(); //3. function call "Y" and similarly for function Y complete memory allocated
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
// first line is Var z = 10; the value of z  first this line is execute var z = 10 that means 10 has
// to assign the value to the variable z and instead of undefined we will put 10

// Next is function invocation, whenever a function is invoke another execution context gets 
//created for that function like function calling X and it will also push to the call stack 
//then the another execution gets created and in this again there are two phases first 
//is memory allocation phase and another is the code execution phase, then in this memory
// allocated to variable z which is z: undefined then code execution starts once code execute
//this function it will say z: 20 then in code execution it will print z: 20 using console.log Z 
//and then x() function gets popped out from call stack again same process will be for the 
//function y() and lastly it will go to the console.log(z)and now it will check the value of z in
// its memory of global execution context so the value of z is 10 then it will print the value of z
// and lastly global execution context gets removed from the call stack

// Output :

// Function X output is : 20
// Function Y output is : 20
// First output is : 10

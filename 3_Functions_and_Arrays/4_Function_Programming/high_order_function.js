// Higher order functions
// It is a function which takes another function as a parameter or returns a function
// It is used to abstract away common logic and make code more reusable
// It is used to implement higher order functions like map, filter, reduce etc.
// we have function x and you are printing something
function x() {
    console.log("-- This is function X --");
}
// And you have another function Y which is taking function X as a parameter
// Like this
function Y(x) {
  x(); // calling function X
    console.log("-- This is Function Y --");
    
}
// This function "Y" is called as "higher order function"
Y(x); // After this If you call the function Y it will print what we write in function X
// And the function which is passed as a parameter which is "X" is called as "CALLBACK" function

// Y ::-> is HIGHER ORDER FUNCTION (Function which takes another function as parameter )
// x ::-> is CALLBACK FUNCTION (Function which is passed as parameter to another function)

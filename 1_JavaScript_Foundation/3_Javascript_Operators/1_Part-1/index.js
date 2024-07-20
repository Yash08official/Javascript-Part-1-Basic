// 1. Arithmetic Operators ::- Addition

let a = 10;
let b = 20;
let addition = a + b;
console.log("addition :", addition);

console.log(addition++); // Post increment
console.log("addition (Post increment) :", addition);

console.log(++addition); // Pre increment
console.log("addition (Pre increment) :", addition);

// 2. Assignment Operators

let x = 10;
// In this we assign value "10" to the variable "x" by using assignment operator "= (equals to)"

let y = 20;
x = x + y; // "x+=y";  or "x = x+y"; both are same

console.log("sum", x);

// Arithematic operator use on strings

let firstName = "Yash";
let lastName = "Wasankar";

firstName += lastName;

console.log("fullName :", firstName);

//Perform addition string and number

const age = 21 ;
const string = "is my age"

const statement  = age+string

console.log("statement is :", statement)
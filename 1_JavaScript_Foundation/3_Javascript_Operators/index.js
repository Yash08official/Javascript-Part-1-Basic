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

const age = 21;
const string = "is my age";

const statement = age + string;

console.log("statement is :", statement);

// 3.Comparison Operator

let age1 = 20;

const adult = age1 > 18;

console.log("Adult", adult);

let c = 10;

let d = 30;

const isLessThan = c > d;

console.log("is", isLessThan);

// == && ===

let num1 = "20";
let num2 = 20;

console.log("Double Equals :", num1 == num2); // only comapre values
console.log("Triple Equals :", num1 === num2); // compare values and types of variable

// != && !==

let num3 = 10;
let num4 = "10";

console.log("Double Equals :", num3 != num4); // only comapre values
console.log("Triple Equals :", num3 !== num4); // compare values and types of variable

// 4. Logical Operators : (&&,||,)

let h = 23;
let j = 34;

console.log("It is true or false :", h > 10 && j < 100); // and
console.log("It is true or false :", h > 10 || j < 100); //or
console.log("It is true or false :", !(h === 23)); // not equal to

//  5. Typeof operator

let r = "ramesh";
console.log("Type of the variable is :", typeof r);

// 6. //  5. Ternary operator

let age2 = 23;
let age3 = 12;

// if () : else ();
age2 > 18 ? console.log("Person is Adult") : console.log("Person is not Adult");
age3 > 18 ? console.log("Person is Adult") : console.log("Person is not Adult");

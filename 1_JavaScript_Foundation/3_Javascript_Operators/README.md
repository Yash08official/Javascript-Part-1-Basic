<h1>JavaScript Operators</h1>

Operators are the symbols which are used to perform som computations

There are different types of operators :

<ul><li>Arithmetic Operators</li>
<li>Comparison Operators</li>
<li>Logical Operators</li>
<li>Assignment Operators</li>
<li>Ternary Operators</li>
<li>Conditional Operators</li>
<li>Type Operators</li></ul>

<h2>Arithmetic Operators :</h2>

This are used to perform some Arithmetic operations on the variables . We perform addition, subtraction, multiplication, division, exponentation (a \*\* b) : a to the power b, modulus(a % b) : When we divide two numbers , the remainder of the two number that is the modulus
Example : Addition ::-

let a =10;
let b = 20;
let addition = a+b;
console.log("addition :", addition);

"\_variableName++" ::- Post increment
"++\_variableName" ::- Pre increment

<h2>Assignment Operators :</h2>

let x = 10;

In this we assign value "10" to the variable "x" by using assignment operator "= (equals to)"

let y = 20
x = x+y;

                        // "x+=y";  or "x = x+y"; both are same
                        // "x-=y";  or "x = x-y"; both are same
                        // "x*=y";  or "x = x*y"; both are same
                        // "x%=y";  or "x = x%y"; both are same
                        // "x/=y";  or "x = x/y"; both are same
                        // "x**=y";  or "x = x**y"; both are same

console.log("sum", x);

NOW, Arithematic operator use on strings

let firstName = "Yash";
let lastName = "Wasankar";

If I want to concatenate firstName and lastName I can simply write

firstName+=lastName

I print it

console.log("fullName :",firstName);

NOW, Perform addition string and number

const age = 20;
const string = "is my age"

const statement = age+string

console.log("statement :" statement)

<h2>Comparison Operators :</h2>

let age = 20;

const adult = age>18;

console.log("Adult",adult);

let x = 10;

let y = 30;

const isLessThan = x>y;

console.log("is",isLessThan);

We have also double and triple equals to (== && ===)

We have also not double and not triple equals to(!= && !==)

let num1 = 10;
let num2 = 20;

console.log("Double Equals :", num1==num2); ::- only comapre values
console.log("Triple Equals :", num1===num2); ::- compare values and types of variable

let num3 = 10;
let num4 = "10";

console.log("Double Equals :", num3 != num4); ::- only comapre values
console.log("Triple Equals :", num3 !== num4);::- compare values and types of variable

<h2>Logical Operators :</h2>

It used to define the logic between variables and values

let x =78;
let y =23;

and i am check condition "x>10 "&&" y<100"

<h2>Type Operators :</h2>

we have typeof operator which tells us the type of the variable which we are using

let r ="ramesh";
console.log(typeof(r));

<h2>Ternary Operators</h2>

If I want to comapre the person adult or not

let age2 = 23;
let age3 = 12;

It is like if () : else (); see below ::->

age2 > 18 ? console.log("Person is Adult") : console.log("Person is not Adult");
age3 > 18 ? console.log("Person is Adult") : console.log("Person is not Adult");

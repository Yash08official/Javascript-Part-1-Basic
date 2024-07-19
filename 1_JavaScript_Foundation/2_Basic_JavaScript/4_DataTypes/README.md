<h1>DataTypes in JavaScript</h1>

We can declare a variable using "let", "Var", "Const".

Variable : It can store different types of data ex : number, String, Arrays and a lot.
We can store any type of data inside this variable

Data Types : The type of data we are storing in a "variable"

Lets say,

let a = 10;
10 is a number so the data type of variable a is a number. So this is called as datatype

In javascript there are total 8 types of data types

<ul>
<li>Number </li>
let b = 23;
<li>String (A series of word or group of characters ) </li>
let x = "Internshla";
<li>Boolean (True or False) </li>
let y = true
<li>Null </li>
let z = null;
<li>Undefined (Not givn any value to the variable) </li>
let e;
<li>BigInt (It store number which can be like a 64 bit floating point number )</li>
let salary = BigInt(12345678732);
<li>Symbol</li>
let val = symbol("123");
<li>Object (Where you are defining a key value pairs)</li>
const user = {
  name : "Yash";
  age : 21;
}
</ul>

<h3>Arrays:</h3>

and when you stored multiple values in variable that is called as "Arrays"
const fruits = ["mangoes", "Banana", "Apple", "Orange"];

and a "type" of array is also a object
means fruit is a object

and tu check thr type of this variable we have to write "typeOf" operator
by using it you can know the type of the operator

if I say

console.log(typeOf(fruits));

You can check it for all datatypes

WE HAVE 7 PRIMITIVE DATA TYPES AND 1 NON PRIMITIVE DATA TYPES WHICH IS "OBJECT"

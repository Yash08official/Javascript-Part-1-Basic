<h1>Conditional Statements </h1>

Sometimes you need to execute a piece of code based on some decision , so whenever you have to take some decision there you can used conditional statements

Conditional statements are ::->

<ul>
<li>If-else</li> : 
  To execute a block or piece of code "if" condition is true Otherwise you can use "else" to execute a block of code if my condition is false

<li>Else-if</li> : 
  To execute any new condition or check any new condition

<li>Switch</li> :
  If we have multiple conditions then we used switch statements
</ul>

Question 1 :
"If we have to check whether a number is positive or not"

let num = 23;
if(num > 0){
console.log("The number is positive");
}
else {
console.log("The number is negative");
}

// Question 2 : We have to print a grade of students , marks > 90 :: A, marks > 80 :: B, marks > 70 :: C, marks > 60 :: D

let a = 92;
let b = 86;
let c = 73;
let d = 61;

if (a > 90) {
console.log("Student have GRADE A");
}
if (b > 80) {
console.log("Student have GRADE B");
}
if (c > 70) {
console.log("Student have GRADE C");
}
if (d > 60) {
console.log("Student have GRADE D");
}
else {
console.log("Student have Failed");
}

It is used when there are multiple conditons

let dayNumber = new Date().getDay();
console.log("Day number is", dayNumber);

It wil shows todays day

Now , example is ::->

let dayNumber = 2;

console.log("Day number is", dayNumber);

let day;
let msg;

switch (dayNumber) {
case 0:
day = "Sunday";
break;
case 1:
day = "Monday";
break;
case 2:
day = "Tuesday";
break;
case 3:
day: "Wednesday";
break;
case 4:
day = "Thursday";
break;
case 5:
day = "Friday";
break;
case 6:
day = "Saturday";
break;
default:
msg = "Please provide valid number";
}

if (msg) {
console.log("Messgae :", msg);
} else {
console.log("Day of the week is :", day);
}

<h1>Loops</h1>

<ul>
<li> For Loop</li>
<li> For of</li>
<li> For in</li>
<li> do while</li>
<li> While</li>
</ul>

<h3> For loop</h3>
Syntax :

for (statement1;statement2;statement3){
//execute your code
}

Question 1 : I have to print number from 0 to 10

for (let i=0;i<10 ;i++ ){
console.log(i);
}

Used of for of loop

const User = {Yash : 99, Virat : 100, Genius : 98}

for (const key in User) {
console.log(User[key]);
}

Used of for of loop

const fruits = ["Guava", "Apple", "Banana", "Orange", "Mango"];

for (const iterator of fruits) {
console.log(iterator);
}

Used of while loop

Syntax :

while (Condition){
//execute the code
}

let value = 0;
while (value <=10){
console.log(value);
value++;
}

Used of do while loop

Syntax :

do {
//execute the code
}
while ();

let num =1;
do {
console.log(num)
num++;
}while(num <5);

<h3> Functions</h3>

Functions is bascially a piece or a block of code which is used to perform some particular task

A piece of code and you want to write functions is you have to used the "function" keyword which is present into a javascript to declare any functions then you have to give the name to the functions

Let say i am writing a functions of some of two numbers, if I have to do some of two numbers, I am creating a functions which is a block of code which can used to always sum of two numbers so the basic syntax of writing a functions in JAvascript

Inside ::-> () this you can take some parameters means some values you can take inside this function

and function will return something

Return ::-> It is an another keyword, any functions can return any result

function \_functionName(){
//block of code (Basic finction Syntax)
}
function sum(num1,num2){
//block of code (Basic finction Syntax)

return num1 + num2
}

Functions : Piece of code perform some tasks, which design to perform some tasks

Now How the functions executed ::->

You will have to call this function or invoke this function

If I have to invoke this function

Now function takes values num1 and num2

function sum(num1,num2){

return num1 + num2
}

sum (2,5);

sum (2,5) in which 2,5 are called as argumnets which are passed to this functions

So when I am writing "Sum" I am calling the function SUM and inside the this function for two variables num1 and num2 I am passing the value 2 and 5

When I appsed the value 2 and 5 it will come to return where he see num1 + num2 so basically 2+5 which is 7 and it will return the result so that result we have to put it in some variable so we crate varable called result

const result = sum(2,5);

It will return inside this local variable ane we can display the result
console.log("Result" , result);

It can be resused again and again

const result2 = sum(23,5);
console.log("Result" , result2);

"Functions where you declare a block of code with some tasks and that code can be reused again and again"

If you declare any variable inside this function that will be the local variable for this functions

Lets say Writing a simple function for writing "Hello World"

function hello(){
let name = "Hello world"; // This ("let name") is a local variable  
 console.log(name);
}

We call it by putting a function name and paratheses

hello();

Its like

function hello(){
let name = "Hello world"; // This ("let name") is a local variable  
 console.log(name);
}

hello();

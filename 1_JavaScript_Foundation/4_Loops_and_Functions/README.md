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

<h1>Switch Statements </h1>

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


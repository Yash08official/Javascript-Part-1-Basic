### JavaScript Functions

<h3>Function Execution</h3>

Functions : It is a small piece of code , which is doing some functionality and that code can be reused again and again

And we declare functions in javascript using Function keyword, name of the function , paraenteses and closing that function

Now, Here

```
var z = 10;
x();
y();
console.log("First output is :", z);

function x() {
  var z = 20;
  console.log("Function X output is :", z);
}

function y() {
  var z = 30;
  console.log("Function Y output is :", z);
}
```

In this,

we are declare the variable "z" golbally
then we invoke x() and invoke y() function
then I am printing the value of "z"

after that
we have function "X" and in this we declare the varaible z and print the value of z
then next
we have function "Y" and in this we declare the variable z and print the value z

So , in the execution context
whenever the javascript course runs abd then the "execution context" get created so it will also created in this also

In this ,lets first assume the output of the variable then there you see first how this code start executing and then it will call function "X" when it will call the function X
it will render to the z = 20; and then after that print the value of the "Z"

then it will call function "Y" when it will call function "Y" it willrender to the z=30;
and then after that the value of the "Z" is printed

lastly it will print value of the varaible "Z" whic was declare globally

```
Output :

Function X output is : 20
Function Y output is : 20
First output is : 10
```

we will debugging it in chrome browser

<h3> Anonymous function </h3>

Any function which is not having any name is called as anonmyous function

If I declare a function without any name this is anonmyous like as follows :

```
function (){

}
```

we cannot run it , it shows "Syntax error : Function statement require a function name"

function statement like

function x() {

}

whenever you are assigning are a function to variable it is called as function expression
suppose you are assigning a function to a variable like this

var a = function(){

}

<em> Anonymous function can only be declare in function expression they cannot be declare in function statement </em>

<h3>Named function expression </h3>

function expression like this

```
var a = function () {

};
```

now if I give a named to it like

```
var a = function abc(){

}
```

Inside javascript we can used it

Now, named function expression
That we are assigning a function to a variable but you also having a seperate name of that function like this

```
var a = function abc(){

}
```

lets say I am having a function like this

var a = function abc(){
  console.log("abc is afunction:",a);
}


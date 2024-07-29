### Default Parameters, Rest parameters & Spread Syntax

<h3>Default Parameters</h3>
<br>
Suppose we have function which is doing sum of Two numbers

// You create function for doing sum of Two numbers a, b and then return a+b

```
function sum(a, b) {
  return a + b;
}
// create varaible in this add sum and two numbers
const result = sum(2, 3);
console.log("Output is :", result); // print the result
```

And if

```
function sum(c, d) {
return c + d;
}

const result1 = sum(2); // If we cannot pass "Second" value
console.log("Output is :", result1); // Output will be "NAN" Beacause it trying to add 2 + undefined So result is NAN
```

Suppose if you have to handle such kind of scenarios then you can put as following

```
function sum(e,f){
b = b == undefined ? 1 : b;
// You can put a check here and say b= and "if b is undefined then take the default value as 1 otherwise b
return e + f;
}

const result3 = sum(2);
console.log("Output is :",result3);

```

Beacause the value is undefined it will give 1 then and
if suppose the value of f is given then it will give the given value as a input

THIS IS ONE WAY

In ES6, there is an default parameter were introduced means you can by deault give default values to the parameters so instead of doing

```
b = b == undefined ? 1 : b;
```

You can give the default value as follows::->

```
function sum(e,f=4){

}
```

<h3>Spread Syntax</h3>

You have an array and you have passing that array

Suppose you have function here, where you are

```
function multiply(i.j){
return i * j;
}
// and lets say you have an array where you have two numbers
const array = [2, 8]; // Take all the elements from array
const mul = multiply(...array); // here ::-> (...array)
console.log("result is :", mul);


//If you have an array and you put it [2, 8] and add  (...array) it will multiply all array
```

```
const arr = [1, 2, 3, 4]; // You have array
const obj = { ...arr }; // You put array in a object
console.log("Output is :", obj);
```

You will get the output like this ::-> Output is : { '0': 1, '1': 2, '2': 3, '3': 4 }
array are converted into an object by using this

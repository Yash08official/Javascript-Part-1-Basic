### JavaScript Keywords

<h2> Let Keyword </h2>

It is introduced as a part of ES6 (EcmaScript 2015). BAsically there was a new major revision done to javascript and lot of features were introduced , So all those features is called as "ES6".

So, Let is a part of ES6 feateures
Basically it is used to declare variables

We know that we cam declare variables using var keyword like

```
var a = 19;
```

Similary, you can start declaring variables using let keyword also

<h3> What is a difference between "let" and "var" keyword</h3>

Any variable which you are declare using var keyword , they are global scope variable
and variable which are declare using let keyword they are blocked scope variable

let say, I am declaring the varuable inside the curly braces (block)

```
{
  let x = 23;
  console.log("Declare using LET keyword :",x);
}
```

The variable which a have declare inside block is only accessible inside this block, you cannot access this variable outside the block. You will get the output when you write it in a block and write

```
console.log("Declare using LET keyword :",x);
```

You will get the output

But same variable if I try to access outside the block like

```
{
  let x = 23;
}
console.log("Declare using LET keyword :",x);
```

Now , it will throw a reference error that ::-> 'Output : ReferenceError: z is not defined'

In case of VAR, no matter where you are write it you can access it from anywhere.
So, if I am using VAR

```
{
  var x = 23;
}
console.log("Declare using LET keyword :",x);
```

Now , we are using both

```
{
let d = 25;
var e = 560;
var f = 34;
console.log("Declare using \"LET\" keyword :", d)
console.log("Declare using \"VAR\" keyword :", f)
}
console.log("Declare using \"VAR\" keyword :", e)
```

<imp> Any variable declare using let keyword they cannot be re-declared, but you can re-intailized it.You can re-declare in the inner-scope bracause that thome they are seperate </imp>

<em> Any variable declare using var keyword they can be declared </em>

<br>

<h2> Const Keyword </h2>

Similar to LET ,"Const" is also a block scope variable that maens,

```
{
  const er = 10;
  console.log("Variable output using \"CONST\" is :",er);
}
```

but I cannot access this variable outside like

```
{
  const er = 10;
}
console.log("Variable output using \"CONST\" is :",er);
```

<em> Any variable declare using "Const" keyword also they cannot be re-declared and also cannot be re-intialized </em>

like

```
const awe = 110;

awe = 1212;
{
  let aw = 110;
  console.log('Variable output using "CONST" is :', aw);
}
console.log('Variable output using "CONST" is :', awe);
// output : TypeError: Assignment to constant variable.
```

In let , you can declare varaible like

```
let a ;
a = 23;
```

but in case of Const
you cannot do it like this,

```
const b ; // It will say : 'const' declarations must be initialized "#always".
b = 23;
```

Whenever you are trying to create a object or array you should always used const
suppose , i am declaring any array
let say,

```
const fruits = ["Mango", "Orange", "Apple", "Bananna"]
// const keyword used to point unique reference
```

I have like this and now I want to change or upadte any value inside this array so that I can do,but you will say this is a const value so "Const" refers to a unique reference

Lets say you can change it like

```
fruits [0] = ["Guava"];
```

but whenever you are trying to create array same like

```
fruit[] = [....];
Output : TypeError: Assignment to constatnt variable
```

it will show the error

You an declare objects also

```
const student = {
  firstName : "Yash",
  middleName: "Prashant",
  lastName: "Wasankar",
};
console.log(student);
```

You can update the object also

```
student.hobby = "Cricket";
console.log(student);
```

<h2> Teemporal Dead Zone </h2>

<em>Are the "let" and "const" variables are hoisted ? </em>

Yes, the varaibles let & const are hoisted in a special way

There is a difference between hoisting in Var and let

If I do

```
console.log(a);
var a =10;
```

We know that we can access this varaible even though we are declaring and intiaizing it later,so the output of this variable is "undefined"

So that means , this varaible is hoisted and it has allocated a memory before-hand
and even the value is undefined,which we can access

If I try to do same thing using "let" variable

```
console.log(a);
let a =10;
```

But in this case, we get an error that Reference error : Cannot access variable before intailization

Because , any variable which are declared using let and const you can used after intialization



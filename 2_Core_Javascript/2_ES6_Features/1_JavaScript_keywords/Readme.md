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

The varaible which a have declare inside block is only accessible inside this block, you cannot access this varaible outside the block. You will get the output when you write it in a block and write

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

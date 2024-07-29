// Are the "let" and "const" variables are hoisted ?
// Yes, the varaibles let & const are hoisted in a special way
//There is a difference between hoisting in Var and let
// If I do

console.log(a);
var a = 10;

// output of this variable is "undefined"
// this varaible is hoisted and it has allocated a memory before-hand
// and even the value is undefined,which we can access

// If I try to do same thing using "let" variable

// ```
// console.log(b);
// let b = 10;
// ```

// we get an error that Reference error : Cannot access (b) variable before intailization
// Because , any variable which are declared using let and const you can used after intialization

// After the value has been assigned to them

let c = 10;
console.log(c);
// Output is C = 10

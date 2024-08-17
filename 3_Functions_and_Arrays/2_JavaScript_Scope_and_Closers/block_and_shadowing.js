var a = 10; // 10
{
  var a = 100; // It will change
  console.log("Value of A in block scope :", a); // 100
}
console.log("Value of A in global scope :", a); // 100


var b = 20876; 
let c = 30;
const d = 10;

{
  var b = 2072; // b = 2072
  let c = 3023420; // c = 3023420
  const d = 389800; // d = 389800
  console.log("Value of B in block scope :", b); // 2072
  console.log("Value of C in block scope :", c); // 3023420
  console.log("Value of D in block scope :", d); // 389800
}
console.log("Value of B in global scope :", b); // 2072
console.log("Value of C in global scope :", c); // 
console.log("Value of D in block scope :", d);
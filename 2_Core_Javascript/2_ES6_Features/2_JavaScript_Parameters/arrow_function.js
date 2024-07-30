// ES5
function sum(a, b) {
  return a + b;
}
const result1 = sum(2, 4);
console.log("ES5 result :", result1);

// ES6 comes
// Whatever the name of the function you were put it in a variable and then you will put an arrow and then you can directly put as a+b
const sum1 = (a, b) => a + b; // it is a function expression

// Both the function are equivalent
// Now when I call sum function with a value of 2 and 4 and they both are returning
//the result (Get the result in a variable)
const result2 = sum1(2, 4);
console.log("ES6 rssult using arrow function :", result2);

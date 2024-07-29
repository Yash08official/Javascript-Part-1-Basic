// You create function for doing sum of Two numbers a, b and then return a+b
function sum(a, b) {
  return a + b;
}
// create varaible in this add sum and two numbers
const result = sum(2, 3);
console.log("Output is :", result); // print the result

function sum(c, d) {
  return c + d;
}

const result1 = sum(2); // If we cannot pass "Second" value
console.log("Output is :", result1); // Output will be "NAN" Beacause it trying to add 2 + undefined So result is NAN

function sum(e, f) {
  f = f == undefined ? 1 : f;
  // You can put a check here and say b= and "if b is undefined then take the default value as 1 otherwise b
  return e + f;
}

const result3 = sum(2);
console.log("Output is :", result3);

// Beacause the value is undefined it will give 1 then and
//if suppose the value of f is given  then it will give the given value as a input

// USING ES6 WAY ::->

function sum(g, h = 6) {
  // You can put a check here and say b= and "if b is undefined then take the default value as 1 otherwise b
  return g + h;
}

const result4 = sum(2);
console.log("Output is :", result4);

//END

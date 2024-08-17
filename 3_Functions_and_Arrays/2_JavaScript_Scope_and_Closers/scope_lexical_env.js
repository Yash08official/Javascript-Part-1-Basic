// Suppose I have a function
//1
function foo() {
  var a = 10; // declare it
  console.log(a); // Print it
}

// We declare it inside the  function and
// If I try to call this function outside
foo(); // we get output is 10

//2
function functionName() {
  console.log(b); // print
}

var b = 23; // If I declare here
functionName(); // Invoke it we get output is 23

// I am getting the output now also

//3
function functionName2() {
  var c = 25; // If I declare here
}
// console.log(c); // print it

functionName2(); //Invoke it we get "ReferenceError: c is not defined"

//4

// Let say you have a function in it
//like

function functionName3() {
  var d = 29; // If I declare here
  function function3() {
    // You create a function
    console.log(d); // here you print it
    }
    function3();
}

functionName3();

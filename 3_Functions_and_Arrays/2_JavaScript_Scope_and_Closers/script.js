function foo() {
  var x = 23; // defined
  function bar() {
    var y = 14; // defined
    console.log("Value of X is :", x); // print
    console.log("Value of A is :", a); // print
  }
  bar(); // invoke
}
var a = 43; // defined
foo(); // invoke

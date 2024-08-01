// function expression

// var a = function () {};

// now if I give a named to it like

// var a = function abc() {};
// Inside javascript we can used it

// Now, named function expression
// That we are assigning a function to a variable but you also having a seperate name of that function like this

// var a = function abc() {};
//lets say I am having a function like this

var a = function abc() {
  console.log("abc is a function");
  console.log(abc);
};
a();

// if i write like "abc();"
//it gives : ReferenceError: abc is not defined

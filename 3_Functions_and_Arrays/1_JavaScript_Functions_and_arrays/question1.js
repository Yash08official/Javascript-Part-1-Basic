//  Define an anonymous function expression printMessage1 that:

// Takes a string message as an argument.
// Logs the message prefixed with "Anonymous function says: ".

// Define a named function expression printMessage2 that:

// Takes a string message as an argument.
// Logs the message prefixed with "Named function says: ".

// Anonymous function example
const printMessage1 = function (message) {
  console.log("Anonymous function says: " + message);
};

// named function example
const printMessage2 = function printMessage2(message) {
  console.log("named function says: " + message);
};

printMessage1("Hello, World!");
printMessage2("Welcome to JavaScript!");

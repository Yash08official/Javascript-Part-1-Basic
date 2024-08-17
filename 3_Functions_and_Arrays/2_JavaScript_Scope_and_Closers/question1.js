
// Question: 1
//
//  * Write a JavaScript function demonstrateScope that:
// Defines a global variable a and sets it to 1.
// Defines a function outerFunction that:
// Defines a variable b and sets it to 2.
// Defines a nested function innerFunction that:
// Defines a variable c and sets it to 3.
// Logs the values of a, b, and c.
// Calls innerFunction inside outerFunction.
// Calls outerFunction in the global scope.

// Define global variable `a`
var a = 1;

function outerFunction() {
    // Define variable `b`
    var b = 2;
    
    function innerFunction() {
        // Define variable `c`
        var c = 3;
        
        // Log the values of `a`, `b`, and `c`
        console.log(a);  // 1
        console.log(b);  // 2
        console.log(c);  // 3
    }
    
    // Call innerFunction
    innerFunction();
}

// Call outerFunction
outerFunction();
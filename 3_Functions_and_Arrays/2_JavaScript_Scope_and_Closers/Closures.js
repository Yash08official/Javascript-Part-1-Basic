// Let say I have a function

function x() {
    var a = 10;

    function y() {
        console.log("Value of A is :", a);
    }
    y();
}
x();

// A function with its lexical environment is called as Closures
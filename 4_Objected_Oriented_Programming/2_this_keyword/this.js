// this keyword in function scope

// We will understand what is the value of this in function scope
// let say

function functionName() {
    console.log("abd"); // this will print the global object (window in browser, global in node)
    console.log(this); 
}
functionName();

// The value of "this" inside any function is the global object
// The global object is the object that is the "root" of the current execution context


// let say I use strict mode : it will give you some strict rule
function functionName() {
    "use strict";
    console.log("abd"); // this will print the global object (window in browser, global in node)
    console.log(this);
}
functionName();

 // When i use strict mode , it provide some strict rules
    
// In strict mode, the value of "this" is undefined, not the global object.



// so , we will understand that in a function scope "this" keyword points to  "GLOBAL OBJECT"
// but in strict mode "this" keyword points to "UNDEFINED"
// so we can say that "this" keyword is not a keyword that points to the current object
// it is a keyword that points to the global object in non-strict mode and undefined in strict

// when I am calling it as
window.functionName();
// it will print the global object (window in browser, global in node)

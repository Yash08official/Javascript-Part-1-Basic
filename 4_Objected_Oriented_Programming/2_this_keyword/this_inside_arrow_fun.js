// lets we know about "this" inside arrow function

// What is the value of this inside arrow function

// Arrow function does not have their own "this"
// then it retains the value of "this" of enclosing lexical content

// Now you have to understand "enclosing lexical content"

// let say

const objectName = {
  x: 10,
  y: () => {
    console.log(this); // this will print the global object
  },
};
// If you do
objectName.y();
// it will print the global object because "this" inside arrow function retains the value of "this"

// lets take tricky problem

const obj1 = {
    s: 1,
    
    r: function () {
        // console.log(this);
    const t = () => {
      console.log(this); // this will print the object
    };
    t();
  },
};
// If you do
obj1.r();

// write in named function it will gives answer as "this will print the object"
// write in global function it will gives answer as "his will print the global object"


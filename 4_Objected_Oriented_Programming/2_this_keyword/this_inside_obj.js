// this keyword inside object method

// Now , what is method
// Method is a block of code which can be called many times from different parts of the program.

// Whenever you create an object and you create a function inside an object that function is called as method

const objectName = {
    x: 2,
    y: function () {
        // this is called as a method
        // Now if want to know the value of this inside this function
        console.log(this);
    }, 
}

objectName.y();

// so we can say that , this keyword inside object method points to that object

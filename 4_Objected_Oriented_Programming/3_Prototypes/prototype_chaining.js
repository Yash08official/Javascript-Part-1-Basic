// Lets understand prototype chaining
// we know that
// Every javascript object has a special property attach to it is "Prototype"

// What is prototype chain


const user = {
    fullName: "Yash",
    city: "Pune",
    // you have method which is called as 
    printDetails: function () {
        console.log(`Greetings from ${this.fullName}`);
    }
}

// On checking on browser we have seen that it has prototype attach to it

// Now to get the prototype of any object, you have a method called as object.getPrototypeOf(give_obj_name)
//Once you do this, it will give you the prototype of that object

//Now, these are the standard prototype of object which is called as object.prototype

// You will see both are same

// user.__proto__ this is also same


// user.__proto__.user.__proto__  then it will give you null

// for all it is null

// user.__proto__ ==> Object.prototype ==> Object.prototype.__proto__ ==> null

// In object , it will first check the values then if the values or the properties or the function are not
// here then it will go inside the prototype , here it will get the prototype

// so, when I used "user.toString"  it will first check the values then if the values or the properties or the function are not
// here then it will go inside the prototype , here it will get the prototype


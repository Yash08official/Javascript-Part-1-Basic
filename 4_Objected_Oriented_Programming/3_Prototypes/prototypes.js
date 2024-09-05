// lets understand prototypes

// Every object in javascript which has special property which is called as Prototypes
// Every object in javascript has a prototype property which is a reference to another object
// When we create a new object in javascript, it inherits all the properties and methods from its prototype

const user = {
    fullName: "Yash",
    city: "Pune",
    // you have method which is called as 
    printDetails: function () {
        console.log(`Greetings from ${this.fullName}`);
    }
}







// Every javascript object has a special property attach to it is "Prototype"
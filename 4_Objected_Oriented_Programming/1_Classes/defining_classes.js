// We will defining classes in JavaScript in it
// Lets talk about classes in javascript

// It is basically a programming template with which you can create multiple objects
// So, it basically gives you the template using it you can create multiple objects
// It is a blueprint of an object
// Let say You have a class
// for writing a syntax of a class

// Let say we are taking a example of bank customer, In a bank there are multiple customers and we are creating
// a basic template of that customer where I store all the information of that customer
class className {
  // Inside it you will have to create constructor which is a function which is req when you create new object
  // for a class which is help us to initialize the values
  constructor(name, email) {
    // lets say i have to create a name , email id of customer so that i simply give you a name
    // and email id and it will add in the object , then I want to create a local variable for this class
    // When you create local variable for the class you can use "this" keyword
    this.name = name;
    this.email = email;
  }
  // So, this is a  constructor where you are taking two properties and basically initialize those variables
  // Apart from constructor you can have multiple functions inside this classes
  // Let say , you have a function which will print details of customer
  printDetails() {
    console.log(
      `Name and Email of the customer is : ${this.name} and  ${this.email}`
      ); // So , will print details of customer as it is
      // Basically you can create multiple functions whatever are required
    }
    // You can also have get method like

    get info() {
        // If you do this you can return whatever you want to return like name in this case
        return this.name;
    }// Your objects get this "info" to get the information
}
// So this is a basic template of a class

// Now we see "HOW OBJECTS ARE CREATED FOR THE CLASS"


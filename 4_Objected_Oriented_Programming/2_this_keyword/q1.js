// Write a JavaScript function createGreeting that:

// Takes two parameters: firstName (string) and lastName (string).
// Defines an object person with properties firstName and lastName.
// Defines a function greet within createGreeting that logs a greeting message using this.firstName and this.lastName.
// Uses call, apply, and bind to invoke the greet function with different contexts:
// callGreet: Uses call to invoke greet with the person object as context.
// applyGreet: Uses apply to invoke greet with the person object and an array of arguments.
// bindGreet: Uses bind to create a bound function bindGreet that can be invoked later with the person object.

function createGreeting(firstName, lastName) {
  // Define person object with firstName and lastName properties
  const objectName = {
    firstName: firstName,
    lastName: lastName,
  };

  function greet(color) {
    console.log(`My name is ${this.firstName} ${this.lastName} `);
  }

  const callGreet = greet.call(objectName); // call method
  const applyGreet = greet.apply(objectName); // apply method

  const bindGreet = greet.bind(objectName);
  bindGreet();
}
createGreeting("John", "Doe");

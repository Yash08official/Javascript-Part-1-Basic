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

// Write a JavaScript function createGreeter that:

// Takes a string greeting as an argument.
// Returns a new function greet that takes a string name as an argument.
// The greet function, when called, logs a message combining the greeting and name, formatted as "{greeting}, {name}!".
function createGreeter(greeting) {
  return function greet(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const greetMorning = createGreeter("Good morning");
greetMorning("Alice !");
greetMorning("Bob !");
const greetEvening = createGreeter("Good Evening");
greetEvening("Charlie");
greetEvening("Diana");

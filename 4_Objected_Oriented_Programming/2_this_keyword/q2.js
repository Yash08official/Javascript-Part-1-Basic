// Write a JavaScript function createCounter that:

// Initializes a property count to 0 within an object counterObj.
// Defines a function increment within createCounter that:
// Increments this.count by 1.
// Logs the current value of this.count.
// Returns the increment arrow function.

function createCounter() {
    // Define counterObj with count property
   const counterObj = {
       count : 0,
   }
  
   // Define increment arrow function within createCounter
  counterObj.increment  = function () {
      counterObj.count++;
       console.log(this.count);
   }
   return counterObj;
   // Return the increment function
}
 const counter = createCounter();
  counter.increment(); 
  counter.increment(); 
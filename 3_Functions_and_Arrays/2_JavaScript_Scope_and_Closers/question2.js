// Write a JavaScript function createCounter that:

// Returns a new function counter.
// The counter function, when called, increments an internal count variable by 1 and logs the current count.
// The count variable should be private and only accessible through the counter function.
// Additionally, create another function createAdder that:

// Takes a number x as an argument.
// Returns a new function that takes another number y and returns the sum of x and y.


// My code :

function createCounter() {
    // Initialize count variable
    let count = 0;
    // Return a function that increments and logs the count
    return function counter(){
        count++;
        console.log(count);
    }
}
function createAdder(x) {
    // Return a function that adds x to its argument y and returns the sum
    return function(y){
        return x + y;
    }
}
// Create a counter and call it multiple times
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Create an adder and use it to add another number
const add5 = createAdder(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15
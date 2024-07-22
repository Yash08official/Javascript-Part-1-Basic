// Write a JavaScript function checkNumber that:

// Takes a single parameter num (a number).
// Uses if-else statements to determine whether the number is positive, negative, or zero, and logs the appropriate message:

// If num is greater than 0, log "The number is positive."
// If num is less than 0, log "The number is negative."
// If num is 0, log "The number is zero."

function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

checkNumber(5); // Output: The number is positive.
checkNumber(-3); // Output: The number is negative.
checkNumber(0); // Output: The number is zero.

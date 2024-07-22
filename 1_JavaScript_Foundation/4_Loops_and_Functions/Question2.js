// Write a JavaScript function categorizeNumber that:

// Takes a single parameter num (a number).
// Uses a switch-case statement to categorize num as follows:
// If num is 1, log "One".
// If num is 2, log "Two".
// If num is 3, log "Three".
// For any other number, log "Unknown number".

function categorizeNumber(num) {
  // Use switch-case to categorize the number
  switch(num){
      case 1:
          console.log("One");
      break;
      case 2 :
          console.log("Two");
      break;
      case 3 :
          console.log("Three");
      break;
      default :
          console.log("Unknown number");
  }
      
}

categorizeNumber(1); // Output: One
categorizeNumber(2); // Output: Two
categorizeNumber(3); // Output: Three
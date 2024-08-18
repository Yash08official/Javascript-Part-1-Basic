// Write a JavaScript function manageNumbers(numbers) that takes an array of numbers (numbers) as input and performs the following tasks:

// Convert to String: Convert the array of numbers into a comma-separated string using toString().
// Join Strings: Join all elements in the array into a single string separated by a hyphen - using join().

// My code
function manageNumbers(numbers1) {
  console.log(numbers1.toString());
  console.log(numbers1.join(" - "));
  // write your code here
  return numbers1;
}

const numbers1 = [1, 2, 3, 4, 5];
manageNumbers(numbers1);

// Programmer code

// function manageNumbers(numbers) {
//   console.log("Initial Numbers:", numbers);

//   // Convert to String
//   function convertToString() {
//     const stringRepresentation = numbers.toString();
//     console.log("String Representation:", stringRepresentation);
//   }

//   // Join Strings
//   function joinStrings() {
//     const joinedString = numbers.join("-");
//     console.log("Joined String:", joinedString);
//   }

//   convertToString();
//   joinStrings();
// }

// const numbers = [1, 2, 3, 4, 5];
// manageNumbers(numbers);

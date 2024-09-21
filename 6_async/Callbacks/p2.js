//  Write a JavaScript function processNumbers that:

// Takes an array of numbers and a callback function as arguments.
// The callback function should be applied to each element in the array, and return a new array where result is stored.
// Create a callback function square that takes a number as an argument and Returns the square of the number.

function processNumbers(numbers, callback) {
	// write your code here
	const result = [];
	
	for (let i= 0; i < numbers.length; i++){ 
	    result.push(callback(numbers[i]));
	}
	
	return result;

}

function square(number) {
    // Return the square of the number
    return number * number;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processNumbers(numbers, square);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 4, 6, 8, 10]

function filterEvenNumbers(numbers) { 
	// write your code here
	return numbers.filter(function theFilter(num){
	    return num % 2 ==0;
    })
    
    // OR
    // return numbers.filter(num => num % 2 === 0);

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));
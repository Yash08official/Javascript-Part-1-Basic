// Write a function called isAllPositive that checks if all elements in an array are positive numbers Using every method. It should return true if all elements are positive; otherwise, it should return false.

// Input : arr = [1,2,3,4]

// Output : true

function isAllPositive(arr) {
	// write your code here
	return arr.every(num => num > 0);

}
console.log(isAllPositive([1, 2, 3, 4]));
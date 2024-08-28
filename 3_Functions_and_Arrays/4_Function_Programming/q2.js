// Given an array names, create a new array nameLengths using the map method where each element in nameLengths is the length of the corresponding string in names.

// Input: names = ['Alice', 'Bob', 'Charlie', 'David']

// Output: [5, 3, 7, 5]

const names = ['Alice', 'Bob', 'Charlie', 'David'];
function getNameLengths(names) {
	// write your code here
	 return names.map(names => names.length);
}
console.log("Length of the name are :",getNameLengths(names)); 
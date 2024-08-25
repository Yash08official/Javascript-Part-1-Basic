function processArray(arr) {
	// write your code here
	const sortArr = arr.sort();
	console.log("Sort array in ascending order :",sortArr);
	
	const revArr = sortArr.reverse();
	console.log("Reverse the sorted array :",revArr);
	
	console.log("Maximum value is :",Math.max(3, 1, 4, 1, 5, 9, 2, 6, 5));
	console.log("Minimum value is :",Math.min(3, 1, 4, 1, 5, 9, 2, 6, 5));
	
    const sortedCopy = sortArr.toSorted();
	console.log("sorted copy of the array :",sortedCopy);

}
const arr1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
(processArray(arr1));


// Another way

function processArray(array) {
    console.log("Original array:", array);
  
    array.sort((a, b) => a - b);
    console.log("Sorted array in ascending order:", array);
  
    const reversedArray = [...array].reverse();
    console.log("Reversed sorted array:", reversedArray);
  
    const maxValue = Math.max(...array);
    console.log("Maximum value in the array:", maxValue);
  
    const minValue = Math.min(...array);
    console.log("Minimum value in the array:", minValue);
  
    const sortedCopy = [...array];
    console.log("Sorted copy of the original array:", sortedCopy);
  
    return {
        originalArray: array,
        sortedArray: array,
        reversedArray: reversedArray,
        maxValue: maxValue,
        minValue: minValue,
        sortedCopy: sortedCopy
    };
  }
  
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  console.log(processArray(array));
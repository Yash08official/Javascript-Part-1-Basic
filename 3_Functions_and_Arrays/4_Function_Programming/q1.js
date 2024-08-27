// Create a higher-order function named addFiveToAll that takes an array and element is increased by 5.
//Then, create another function that takes the addFiveToAll function as its first argument and prints
// the array

// Input: arr = [1, 2, 3, 4, 5]

// Output : 6 7 8 9 10

function addFiveToArray(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] + 5);
    }
    return result;
  }
  
  function printNumbers(transformFunction, array) {
    const transformedArray = transformFunction(array);
    for (let i = 0; i < transformedArray.length; i++) {
      console.log(transformedArray[i]);
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  printNumbers(addFiveToArray, numbers);
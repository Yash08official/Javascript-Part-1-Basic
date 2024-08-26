// Implement the printArrayElements function that takes an array as input. Use the following loops to perform specific tasks:

// 1. Using for-of : Print each element of the array.

// 2. Using for-in : Print each element of the array along with its index.

// 3. Using basic for : Compute and print the sum of all elements in the array

function printArrayElements(array) {
    console.log("Using for-of loop:");
    for (const element of array) {
      console.log(element);
    }
  
    console.log("Using for-in loop:");
    for (const index in array) {
      console.log("Index", index, array[index]);
    }
  
    console.log("Using basic for loop to compute sum:");
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
      totalSum += array[i];
    }
    console.log("Total sum:", totalSum);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  printArrayElements(numbers);
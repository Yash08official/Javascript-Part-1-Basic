// Implement a function named sumOfSquares that calculates the sum of squares of all elements in an array using reduce method.

// Input : arr = [1,2,3,4]

// Output : 30

// Explanation :

// 1*1 + 2*2 + 3*3 + 4*4 = 30

function sumOfSquares(arr) {
    
    return arr.reduce((acc, val) => acc + val * val, 0);
  
  }
  console.log(sumOfSquares([1, 2, 3, 4]));
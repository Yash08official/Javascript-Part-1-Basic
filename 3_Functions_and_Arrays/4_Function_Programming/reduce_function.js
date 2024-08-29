// reduce method
// It is basically used to reduce the array to a single value
// It is a higher order function where if you have to iterate over multiple elements of an array and
// you want a single result out of it

// Let say , I have array

let red = [1, 2, 3, 4, 5, 6, 7];
// I want to print the sum of all elements of an array
// If I have to do the sum of all these elements of the array , so my output will be
// 1+2+3+4+5+6+7 = 28
// So , we can use reduce method to get the sum of all elements of an array

// Simply, we do it as

let sum = 0;
for (let i = 0; i < red.length; i++) {
  sum = sum + red[i]++; // var += red[i];
}
console.log("Sum of an array is :", sum);

// Lets say I want to do it using reduce method

const result = red.reduce(function (accumulator, currElement) {
  accumulator = accumulator + currElement;
  return accumulator;
}, 0);

console.log(result);

// Suppose you have to find the maximum element of an array

const element = [1, 2, 3, 4, 5, 6, 7];

let max = element[0];

for (let i = 1; i < element.length; i++) {
    if (element[i] > max) {
        max = element[i];
    }
}
console.log(max);

const maxEle = element.reduce(function (maxi, currElement) {
    if (currElement > maxi) {
        maxi = currElement;
    }
    return maxi;
}, 0);

console.log("Maximum value is :",maxEle);

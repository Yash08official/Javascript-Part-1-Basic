// Map method in JavaScript
// Map is the method on arrays which is a higher order function and which is basically used 4
// to transform the contents of an array

// If we have to change the content of an array we will used the map function or method
// So , What do we meant by "change"
// let say I have an array of numbers

let arr = [1, 2, 3, 4, 5, 6];
// And I have to print the square of all element in the array
// Let say I have a function

function square(x) {
  return x * x;
}
// What does array map method do ?
// It takes a function as an argument and applies it to each element of the array and returns a
// new array with the results of the function applied to each element of the array
// It will change the content but it will not modify the original content (It will create a new array)

const resultArr = arr.map(square);
console.log(resultArr);
// It will create a new array and print it
// Output: [1, 4, 9, 16, 25, 36]
console.log(arr);
// The original array is as same as it is

// Suppose you need to double the element of an array
// It means"multiply by 2"

let element = [2, 4, 6, 8, 10];
function doubleEle(y) {
  return y * 2;
}
// Now we will use the map method to double the element of the array
const resultEle = element.map(doubleEle);
console.log(resultEle);
console.log(element);
// As we see the original array will be there as it is and it will create a new array and print it

// Let say you have an array of objects
const users = [
  {
    firstName: "Yash",
    lastName: "Wasankar",
    age: 22,
  },
  {
    firstName: "Rohan",
    lastName: "Wasankar",
    age: 25,
  },
];

// Now you need to get the full name of all the users
// Suppose I have to print the firstName of all the user only
// So my output should be array which only print the firstName of the array
//["Yash","Rohan"]

const firstName = users.map(users => users.firstName);
console.log(firstName);
// map always returns a new array according to the function you have been written
// It performs the operation on every element one by one and then it returns the new array
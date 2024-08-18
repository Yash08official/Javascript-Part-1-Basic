// we will also create an array which is not a prefer way as we see earlier
// Suppose we are creating an array using new keyword

const arr = [1, 2, 3, 4, 5, 6];
// If I console the array
console.log(arr);

//but
const newArray = new Array(1, 2, 3, 4, 5); // Not a prefer way to create an array
// If I console the array
console.log(newArray);
// There is one error when I create array like this
// Suppose If i have to create a array which only one contain element like this ::->

const arr2 = new Array(34);
console.log(arr2); // It shows the output :-> [ <1 empty item> ]
// Here it creates an array of length 24 , so 24 items get crated in it

const arr3 = [34];
console.log(arr3); // Output is [ 1 ] which is right

// Lets starts with JS array methods

// 1. "Array.length" property
// How do I check that how many elements present in an array like
// Suppose I have an array like this ::->

const fruits = ["Apple", "Banana", "Orange", "Grapes"];
// If I want to check that how many elements are present in the array
// I can use "length property" of array like this ::->
console.log(`Output using "Array.length" property is ${fruits.length}`); // Output is 4

// 2. "Indexes"
// If I want to access the first element in an array only then
// I can use "index" like this ::->
console.log(`Output using "Indexes" property is ${fruits[0]}`); // Output is Apple

// 3. "length - 1"
// If I want to access the last element of an array
// I can use "length - 1" like this ::->
console.log(
  `Output using "length - 1" property is ${fruits[fruits.length - 1]}`
); // Output is Grapes

// 4.
// If toy want to convert any array into a string
// There are 2 methods for this
//1) tostring()
console.log(`Output using "tostring" property is ${fruits.toString()}`);
// So it will return a string means the array is converted into a string
// If we will check the type also
const result = fruits.toString();
console.log(result);
console.log(`Type of it is ${typeof result}`);
// 2) join()
console.log(`Output using "join" property is ${fruits.join()}`);
// So it will return a string means the array is converted into a string
// If we will check the type also
console.log(fruits.join());
//and also you can join any array using this also
// like this ::->
console.log(fruits.join("%"));


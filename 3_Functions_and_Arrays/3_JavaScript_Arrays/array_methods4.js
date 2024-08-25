// first array method no is concatenation
// Concat() ::-> Whenever you have to join two arrays we do concatenation
// Let say I have an array
const arr1 = [1, 2, 3, 4, 5];
console.log(`Array 1 is : ${arr1}`);
const arr2 = [6, 7, 8, 9, 10];
console.log(`Array 2 is : ${arr2}`);
// Now we have to join these two arrays
const arr3 = arr1.concat(arr2);
console.log(`After joining the two array the value is ::-> ${arr3}`);

// Now let us talk about flat method
// flat() ::-> Whenever you have to join two arrays we do concatenation
// Let say I have an array
const arr4 = [1, 2, 3, 4, 5];
console.log(`Array 1 is : ${arr4}`);
const arr5 = [6, 7, 8, 9, 10];
console.log(`Array 2 is : ${arr5}`);
// Now we have to join these two arrays
// We can use flat() method to join the two arrays
const arr6 = arr4.concat(arr5).flat();
console.log(`After joining the two array the value is ::-> ${arr6}`);

// Now IndexOf
// indexOf() ::-> Whenever you have to find the index of the element in the array we use
// indexOf() method
const arr7 = [1, 2, 3, 4, 5];
console.log(`Array 1 is : ${arr7}`);
// Now we have to find the index of the element 3 in the array
const index = arr7.indexOf(3);
console.log(`The index of the element 3 is ::-> ${index}`);
// Now let us talk about lastIndexOf
// lastIndexOf() ::-> Whenever you have to find the index of the element in the array we
// use lastIndexOf() method
const arr8 = [1, 2, 3, 4, 5];
console.log(`Array 1 is : ${arr8}`);
// Now we have to find the index of the element 3 in the array
const lastIndex = arr8.lastIndexOf(3);
console.log(`The index of the element 3 is ::-> ${lastIndex}`);
// If there is an occurrence of one element multiple times
// then lastIndexOf() method will return the index of the last occurrence of the element
// For example
const arr9 = [1, 2, 3, 4, 5, 4, 4];
console.log(`Array 1 is : ${arr9}`);
// Now we have to find the index of the element 4 in the array
const lastIndex1 = arr9.lastIndexOf(4);
console.log(`The index of the element 4 is ::-> ${lastIndex1}`);
// Now let us talk about includes
// includes() ::-> Whenever you have to check whether the element is present in the array or not
// we use includes() method
const arr10 = [1, 2, 3, 4, 5];
console.log(`Array 1 is : ${arr10}`);
// Now we have to check whether the element 3 is present in the array or not
// We use includes() method to check whether the element is present in the array or not
const includesM = arr10.includes(3);
console.log(`The element 3 is present in the array or not ::-> ${includesM}`);
// It gives the answer as "The element 3 is present in the array or not ::-> true"


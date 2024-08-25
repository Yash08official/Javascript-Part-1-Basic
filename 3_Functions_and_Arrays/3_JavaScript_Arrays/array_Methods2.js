// at() ::-> This is used to access the element in an array
// Lets say I have an array of numbers

const num = [2, 4, 6, 8, 10];
// Now I have to access the element of first index , basically indexing starts from 0
// So to access any element in a particular index we have seen this method
console.log(`If we have to access any element in a particular index ${num[1]}`); // we have another method which is called as at() for access the element
// we write
console.log(`Another method is to access any element ${num.at(1)}`);

// Now when we have to add or remove any element in an array we have to element which is PUSH and POP
// PUSH ::-> This is used to add any element in an array (Push last element at the end)
// Lets say I have an array of numbers
const numb = [2, 4, 6, 8, 10];
// Now I have to add any element in an array
console.log(`Before adding any element ${numb}`);
// Now we have to add any element in an array we have to use PUSH method
console.log(`After adding any element ${numb.push(12)}`);
// Now we have to add any element in an array we have to use PUSH method
console.log(`After adding any element ${numb.push(14)}`);
console.log(numb);
// POP ::-> This is used to remove last element in an array
// Lets say I have an array of numbers
const rmNum = [1, 2, 3, 4, 5, 6, 7, 8];
// Now I have to remove any element in an array
console.log(`Before removing any element ${rmNum}`);
// Now we have to remove any element in an array we have to use POP method
console.log(`After removing any element ${rmNum.pop()}`);
console.log(rmNum);

// Now we have one more thing that shifting of an array
// So popping and pushing is the removing and adding elements at the last of an array
// shifting is used for adding and removing any element from starting or beginning of an array
// so , first method is shift
// So whats shift do
// Shift ::-> It removes element from beginning of an array {OPPOSITE OF POP}
// It also return element which has been removed
// Only difference is it will remove it from the beginning
const arr = ["mango", "banana", "apple", "grapes"];
// Now I have to remove any element from the beginning of an array
console.log(`Before removing any element ${arr}`);
// Now we have to remove any element from the beginning of an array we have to use shift method
console.log(`After removing any element ${arr.shift()}`);
console.log(arr);
// Now we have another method which is unshift
// unshift ::-> It adds element at the beginning of an array {OPPOSITE OF PUSH}
// It also return the length of an array
const arr1 = ["mango", "banana", "apple", "grapes"];
// Now I have to add any element at the beginning of an array
console.log(`Before adding any element ${arr1}`);
// Now we have to add any element at the beginning of an array we have to use unshift
console.log(`After adding any element ${arr1.unshift("orange")}`);
console.log(arr1);


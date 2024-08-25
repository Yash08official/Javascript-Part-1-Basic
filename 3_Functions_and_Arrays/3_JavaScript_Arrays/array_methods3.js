// delete method
// Let we have an array of names
const arr = ["Yash", "Virat"];
// Let say I want to remove the "Yash" in the element then what I can I do
// I can used delete method here , I have to give array name and index of the element which I want to remove
delete arr[0];
// So this method delete the element from the array
// Now if i do
console.log(arr);
// It will print [ 'Virat' ] but it will not removed the empty space of deleted element
// we have another method called Splice
// Splice method is used to add or remove elements from an array
// It can be used to add or remove multiple elements from an array
// It can be used to add or remove elements from any position in the array
// Let say we have array called numbers
const numbers = [1, 2, 3, 4, 5, 6, 7];
// Let say we want to remove the 3rd element from the array
// We can use splice method here , I have to give array name and two index of the element
// The first index is the position where I want to start removing elements and the second index is the
// position where I want to end removing elements
numbers.splice(2, 1);
// So this method remove the element from the array
// Now if i do
console.log(numbers);
// It will print [ 1, 2, 4, 5, 6,]

// Now the silce method is used to Slicing out the elements in an array
// It is used to extract a part of an array and return it as a new array
// when you have an array where we are putting elements in an array and now
//i want to take out contents in an array so You can used slice methods
// It will be like

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = num.slice(1, 4);
console.log(res);

// There is also one method called "toSpilced" , It is same as splice but there is only one change which is
// The splice is modified the original array
// But the toSpilced is return the modified array but it does not modify the original array

num.toSpliced(2,1,234);

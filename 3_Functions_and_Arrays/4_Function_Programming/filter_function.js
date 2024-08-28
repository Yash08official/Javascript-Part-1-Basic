// Lets talk about filter method or function

// It is basically used to filter any elements from an array
// So map was used to basically used to transform or change the content or element of an array .
// But filter is used to filter out the elements from an array based on a condition.

const arr = [2, 3, 5, 6, 7];
// we have to filter out even numbers in the array

// So to take out the even numbers from an array, you have to apply filter method

function evenNum(x) {
  return x % 2 == 0;
}
// function evenNum(x) {
//     return x % 2 == 0;
//   }

const resFilter = arr.filter(function evenNum(x) {
  return x % 2 == 0;
});
console.log(resFilter);

// element greater than 5
const grThan = arr.filter(function greatThan(x) {
  return x > 5;
});
console.log(grThan);

const lessThan = arr.filter(function lesThan(x) {
  return x < 5;
});
console.log(lessThan);

// Let say I have an array of students
const students = [
  {
    firstName: "Yash",
    lastName: "Wasankar",
    age: 20,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    age: 30,
  },
];

const Length = students.filter(students => students.age > 23);
console.log(Length);
// output will be "[ { firstName: 'Virat', lastName: 'Kohli', age: 30 } ]"
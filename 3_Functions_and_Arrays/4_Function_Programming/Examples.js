// What is the output of the following code?

const arr = [1, 2, 3, 4, 5];

const sumOfSquares = arr.reduce((acc, curr) => acc + curr ** 2, 0);
console.log(sumOfSquares);

// A. 55

// B. 15

// C. 25

// D. 30

// The code calculates the sum of the squares of the elements in the array. Let's break it down:

// 1. The array `arr` is `[1, 2, 3, 4, 5]`.
// 2. The `reduce` method iterates through each element of the array, calculating the square of each element and accumulating the result.

// Here's the calculation:

// - \(1^2 = 1\)
// - \(2^2 = 4\)
// - \(3^2 = 9\)
// - \(4^2 = 16\)
// - \(5^2 = 25\)

// Adding them together:

// \[1 + 4 + 9 + 16 + 25 = 55\]

// So, the output is `55`.

// **Correct Answer: A. 55**


// What will be the output of the following code?

 const words = ["apple", "banana", "cherry"];

 const longestword = words.reduce(

(longest, word) => (word.length > longest.length? word: longest),

 );

 console.log(longestword);

// A. banana'

// B. cherry'

// C. apple'

// D. Error

// The code is designed to find the longest word in the words array using the reduce method. Here's how it works:

// The array words is ["apple", "banana", "cherry"].
// The reduce method iterates through each word in the array, comparing the length of the current word with the length of the longest word found so far.
// The function returns the longer word each time, so by the end of the iteration, longestword will contain the longest word.
// Here’s the comparison step by step:

// Compare "apple" (length 5) with "banana" (length 6): "banana" is longer.
// Compare "banana" (length 6) with "cherry" (length 6): Both are the same length, so "banana" remains.
// Thus, the longest word is "banana".

//You are creating a digital recipe book application that allows users to manage their favorite recipes. Each recipe is represented as an object with properties like name, ingredients, and instructions. You need to implement a feature that allows users to sort their recipes alphabetically by name. Which method would you use to achieve this?

// A. concat()

// B. sort()

// C. indexOf(),

// D. includes()

// To sort the recipes alphabetically by name, you would use the sort() method. This method allows you to sort elements in an array based on a specific condition, such as comparing the name property of each recipe object.

// Correct Answer: B. sort()

// What is the output of the following code?

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num 2);

console.log(doubledNumbers);

// A. [1, 2, 3, 4, 5]

// B. [2, 4, 6, 8, 10]

// C. undefined

// D. Error

//The code you provided has a syntax error in the line:


const doubledNumbers = numbers.map((num) => num 2);
//The operation for doubling the numbers is missing the multiplication operator *. It should be:


const doubledNumbers = numbers.map((num) => num * 2);
// Without this correction, the code will result in a syntax error.

// Correct Answer: D. Error



//What is the output of the following code?

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num 2);

console.log(doubledNumbers);

// A. [1, 2, 3, 4, 5]

// B. [2, 4, 6, 8, 10]

// C. undefined

// D. Error

//The code provided will result in a syntax error because the multiplication operator (*) is missing between num and 2 in the map function:

const doubledNumbers = numbers.map((num) => num 2);
//The correct code should include the multiplication operator:


const doubledNumbers = numbers.map((num) => num * 2);
//Given the syntax issue, the correct answer is:

// Correct Answer: D. Error

// What will be the output of the following code?

const numbers = [1, 2, 3, 4, 5];

const [first, ...rest] = numbers;

console.log(first, rest);

// A. Error

// B. [1] [2, 3, 4, 5]

// C. 12345

// D. 1 [2, 3, 4, 5]

// The code uses array destructuring to assign values from the `numbers` array to variables. Here's what happens:

// 1. `const [first, ...rest] = numbers;`:
//    - `first` is assigned the first element of the `numbers` array, which is `1`.
//    - `rest` is assigned the remaining elements of the array as a new array, which is `[2, 3, 4, 5]`.

// 2. `console.log(first, rest);`:
//    - This will log the value of `first`, which is `1`, and the array `rest`, which is `[2, 3, 4, 5]`.

// Therefore, the output of the code will be:

// **Correct Answer: D. 1 [2, 3, 4, 5]**


//What is the output of the following code?

function greet(name) {

return "Hello, " + name + "!";

}

const result = greet(); console.log(result);

// A. Hello, undefined!

// B. Hello, null!

// C. Hello, !

// D. Hello, world!


//In the code provided:


function greet(name) {
  return "Hello, " + name + "!";
}

const result = greet();
console.log(result);


// The `greet` function is called without any arguments, so the `name` parameter is `undefined` by default. When `undefined` is concatenated with strings, it is converted to the string `"undefined"`.

// Therefore, the output will be:

// **Correct Answer: A. Hello, undefined!**


//What will be the output of the following code?

function add(a, b) {

return a + b;

}

function multiply(a, b) {

return a * b;

}

const result = multiply(add(2, 3), 4); console.log(result);

// Let's break down the code step by step:

// 1. The `add` function is called with arguments `2` and `3`, so it returns `2 + 3 = 5`.

// 2. The `multiply` function is then called with the result from the `add` function (which is `5`) and `4`, so it returns `5 * 4 = 20`.

// 3. The value `20` is assigned to the `result` variable.

// 4. Finally, `console.log(result)` prints `20`.

// So, the output will be:

// **20**.

//What will be the output of the following code?

const numbers = [5, 2, 8, 1, 9];

const doubledNumbers = numbers.map((num) => num * 2);

const sortedDoubledNumbers = doubledNumbers.sort();

console.log(sortedDoubledNumbers);

// Let's break down the code step by step:

// 1. The `numbers` array is `[5, 2, 8, 1, 9]`.

// 2. The `map` method is used to create a new array, `doubledNumbers`, where each number in the original array is multiplied by 2:
//    - `5 * 2 = 10`
//    - `2 * 2 = 4`
//    - `8 * 2 = 16`
//    - `1 * 2 = 2`
//    - `9 * 2 = 18`
   
   //So, `doubledNumbers` is `[10, 4, 16, 2, 18]`.

// 3. The `sort` method is then used on `doubledNumbers`. By default, `sort()` converts elements to strings and sorts them lexicographically (alphabetically) rather than numerically. Here’s the sorted order:
//    - `10` (as a string) comes before `16` and `18`
//    - `16` (as a string) comes before `18`
//    - `18` (as a string) comes after `16`
//    - `2` (as a string) comes before all the others (because `"2"` is less than `"10"`, `"16"`, etc.)
//    - `4` (as a string) comes after `2` but before the others

//    The sorted array becomes `["10", "16", "18", "2", "4"]`.

//So the output will be:

//Correct Answer: [10, 16, 18, 2, 4]

//If you wanted to sort the numbers numerically, you would need to provide a comparison function like this:


const sortedDoubledNumbers = doubledNumbers.sort((a, b) => a - b);

//What is the output of the following code?

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => acc + curr, 10); console.log(sum)

// Let's analyze the code step by step:

// 1. The array `arr` is `[1, 2, 3, 4, 5]`.

// 2. The `reduce` method is used to sum all the elements in the array. The `reduce` function takes two parameters:
//    - `acc` (accumulator) starts with the initial value provided, which is `10`.
//    - `curr` (current value) is each element in the array.

// 3. The `reduce` method will iterate through the array and perform the following calculations:

//    - Initial `acc` = 10
//    - First iteration: `acc` = 10 + 1 = 11
//    - Second iteration: `acc` = 11 + 2 = 13
//    - Third iteration: `acc` = 13 + 3 = 16
//    - Fourth iteration: `acc` = 16 + 4 = 20
//    - Fifth iteration: `acc` = 20 + 5 = 25

// 4. The final value of `acc` is `25`, so the `reduce` method returns `25`.

// 5. `console.log(sum)` will print `25`.

// Therefore, the output of the code is:

// **25**.


// You are building an inventory system for an e-commerce platform. The system keeps track of the products available for sale. Each product is represented as an object with properties like name, price, and inStock (a boolean indicating whether the product is in stock or not). You need to implement a feature that allows the system to check if a specific product is currently in stock. Which method would you use to achieve this?

// A. sort()

// B. splice()

// C. concat()

// D. includes()

// To check if a specific product is currently in stock based on the `inStock` property, you would typically use a method that allows you to search through the array of product objects and check the condition.

// For this purpose, the `find` or `some` methods are more appropriate, but among the given options:

// - `sort()` is used to sort the array.
// - `splice()` is used to add or remove elements from the array.
// - `concat()` is used to merge arrays.

// None of these methods directly check for a condition on the array elements.

// However, if you have an array of product names or IDs and you want to check if a specific product exists in that array, you might use `includes()` to see if the product is listed. But for checking a condition like whether a product is in stock, you'd generally use `find` or `some`.

// Given the options, `includes()` is the closest, though it's not the ideal choice for checking an object's property.

// **Correct Answer: D. includes()**

//What is the output of the following code?

const arr = [1, 2, 3, 4, 5];

const doubledEvenArr = arr.filter((num) => num % 2 === 0).map((num) => num * 2);

console.log(doubledEvenArr);

//Let's break down the code step by step:

//1. **Filtering the Array:**

   arr.filter((num) => num % 2 === 0)

//    This filters the `arr` array to keep only the even numbers:
//    - `1` is not even.
//    - `2` is even.
//    - `3` is not even.
//    - `4` is even.
//    - `5` is not even.

//    So, the result of the filter operation is `[2, 4]`.

//2. **Mapping the Filtered Array:**

   .map((num) => num * 2)
  
//    This maps each number in the filtered array by multiplying it by 2:
//    - `2 * 2 = 4`
//    - `4 * 2 = 8`

  // So, the result of the map operation is `[4, 8]`.


   console.log(doubledEvenArr);


//    The `doubledEvenArr` will contain `[4, 8]`.

// Therefore, the output of the code is:

// **[4, 8]**

//What will be the output of the following code?

const arr = ("apple", "banana", "cherry"]; for (const fruit of arr) { console.log(fruit);

}

//The code you provided contains a syntax error in the declaration of the `arr` variable. Specifically, you have a mismatched parenthesis and bracket:


const arr = ("apple", "banana", "cherry"];


//The correct syntax for creating an array is to use square brackets `[]`, not parentheses `()`. The correct declaration should be:


const arr = ["apple", "banana", "cherry"];


//Assuming you correct the syntax, the code with the corrected array declaration would be:


const arr = ["apple", "banana", "cherry"];
for (const fruit of arr) {
  console.log(fruit);
}


//This corrected code will output each element of the array on a new line:

// apple
// banana
// cherry


//Since the original code has a syntax error, it will result in an error if run as is.


// You have an array of objects representing students. Each student object has a name and age property. How would you create a new array containing only the names of students who are over 18 years old?

// A. Use filter() to create a new array with students over 18, then map() to extract their names.

// B. Use map() to extract the names of all students, then sort() to remove names of students under 18.

// C. Use reduce() to iterate over the array and create a new array with the names of students over 18.

// D. Nnoe of the above

// To create a new array containing only the names of students who are over 18 years old, the most effective approach is:

// A. Use filter() to create a new array with students over 18, then map() to extract their names.

// Here’s how it works:

// Filter the array to include only students who are over 18 years old.
// Map the filtered array to extract only the names of these students.
// Here’s a sample implementation:

const students = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 16 }
  ];
  
  const namesOver18 = students
    .filter(student => student.age > 18)
    .map(student => student.name);
  
console.log(namesOver18); // Output: ['Bob', 'Charlie']
  
//Explanation of other options:

// B: Using map() to extract all names and then sort() would not effectively filter out students under 18. Sorting does not remove elements.

// C: Using reduce() is not as straightforward for this task compared to filter() and map(). While it's possible, it adds unnecessary complexity.

// D: "None of the above" is incorrect as option A is the most suitable method.

//You are building a grading system for a school. The system needs to calculate the average grade for each student based on their test scores. Which array method would you use to calculate the average grade?

// A. reduce()

// B. forEach()

// C. map()

// D. filter()

// To calculate the average grade for each student based on their test scores, the most suitable array method is:

// A. reduce()

// Here’s how reduce() can be used to calculate the average:

// Sum all the test scores using reduce().
// Divide the sum by the number of test scores to get the average.
// Here’s a sample implementation:

const testScores = [85, 90, 78, 92, 88];

const total = testScores.reduce((acc, score) => acc + score, 0);
const average = total / testScores.length;

console.log(average); // Output: average of the test scores


// Explanation of other Options:

// B. forEach(): This method iterates over the array but does not return a value or directly support aggregation operations like summing up values.

// C. map(): This method transforms each element in the array, which is not useful for calculating a single average value.

// D. filter(): This method is used to create a new array with elements that pass a certain condition, not for calculating an average.

// What will be the output of the following code?

const numbers = [1, 2, 3, 4, 5]; const [first, second, ...rest] = numbers; console.log(first, second, rest);

// A. [1, 2] [3, 4, 5]

// B. 1 2 [3, 4, 5]

// C. 12345

// D. Error

//In the code provided:

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// first will be assigned the value 1, which is the first element of the numbers array.
// second will be assigned the value 2, which is the second element of the numbers array.
// rest will be assigned the remaining elements of the array [3, 4, 5] using the rest parameter syntax.
// When console.log(first, second, rest) is executed, it will print:

// So, the output will be:

// B. 1 2 [3, 4, 5]

//You are working on a student enrollment system for a school. The system keeps track of the courses offered and the students enrolled in each course. Each course is represented as an object with properties like name, code, and enrolledStudents (an array of student names). You need to implement a feature that allows the school administration to add a new student to a specific course. Which method would you use to achieve this?

// A. sort()

// B. splice()

// C. indexOf()

// D. lastindexOf()

// To add a new student to a specific course, you would typically use the splice() method. This method allows you to modify an array by adding or removing elements at a specific position.

// Here’s how you could use splice() in the context of adding a student to a course:

// Find the specific course object from the list of courses.
// Use splice() to add the new student's name to the enrolledStudents array of that course.
// For example:

const courses = [
    { name: 'Math', code: 'M101', enrolledStudents: ['Alice', 'Bob'] },
    { name: 'Science', code: 'S101', enrolledStudents: ['Charlie'] }
  ];
  
  const courseIndex = courses.findIndex(course => course.code === 'M101');
  if (courseIndex !== -1) {
    courses[courseIndex].enrolledStudents.push('David');
  }
  
console.log(courses);
  
// In this example, push() is used to add a student, but splice() can also be used if you need to add a student at a specific index.

// Explanation of other options:

// A. sort(): This method sorts the elements of an array and is not used for adding elements.

// C. indexOf(): This method returns the index of a specified element but does not modify the array.

// D. lastIndexOf(): Similar to indexOf(), this method returns the last occurrence of a specified element and does not modify the array.

// Correct Answer: B. splice()


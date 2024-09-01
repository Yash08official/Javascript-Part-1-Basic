// We will discuss about creating and using objects
// What is an object :
// It is basically collection of properties and methods
// A simple basic object can be created like this

const users = {};
// This is also called as object literals
// Now this object can have multiple key value pairs inside it
// It can have properties, it can have methods, if you see we can add multiple properties inside it
// let say names
const user = {
  names: ["Yash", "Virat"],
  age: 21,
  //function for printing the details
  printDetails: function () {
    console.log("Details of User");
    // This is one function , you can add multiple functions also
  },
  greetings: function () {
    console.log("greetings!!!!");
    },
    // You can also stored object in an object like this ::->
    lastname: {
        first: "Yash",
        last : "Wasankar",
  },
};
console.log("Names are :",user.names);
console.log("age is : ", user.age);
user.greetings();
user.printDetails();
// If I want to access value in object in object we can write like this ::->
console.log("Object 2 first name :",user.lastname.first);
console.log("Object 2 last name :",user.lastname.last);

// Name, age are the properties
// Method : It is basically , any function inside an object

// Now , we have something called as bracket notation
// we can say

console.log(user["age"]);
// This will also give you the age of the user


// If you have logging something using a function where you want to pass property name and you want 
//to access this property in that object , You will always used bracket notation
// Let say I have a function
function logProperty(propertyName) {
   // for this whatever is the value of this property name you take that values
    console.log(user[propertyName]); // It will basically look user["age"]
}
// So I will pass age as a string
logProperty("age");

// This is how you create an object and access the property of an object
// settings an object
// Settings object numbers

// Let say I want to set and update the properties, how we can do it

const user = {
  names: ["Yash", "Virat"],
  age: 21,
  printDetails: function () {
    console.log("Details of User");
  },
  greetings: function () {
    console.log("greetings!!!!");
  },
  lastname: {
    first: "Yash",
    last: "Wasankar",
  },
};
console.log("Names are :", user.names);
console.log("age is : ", user.age);
user.greetings();
user.printDetails();
// If I want to access value in object in object we can write like this ::->
console.log("Object 2 first name :", user.lastname.first);
console.log("Object 2 last name :", user.lastname.last);

console.log(user["age"]);

function logProperty(propertyName) {
  console.log(user[propertyName]);
}
logProperty("age");

// Let say I want to update the "names" in the object "user"
// then you can say
user["lastname"]["first"] = "Alice";
// In simple way you can write it as
 user.lastname.first = "Alice_New";
console.log(user.lastname.first);

// Let say You want to update the age

user.age = "15";
console.log(user.age);
alert("Hello who are you");
alert("Enter your Name");
const fullName = prompt("Enter your name :", "calvin"); // it is used to get a input
// console.log(fullName);

const isConsole = confirm(" Do you want to write your name on console");
// console.log(isConsole);

if (isConsole) {
  console.log(fullName);
} else {
  console.log("Permission denied");
}
// this are blocking your code execution
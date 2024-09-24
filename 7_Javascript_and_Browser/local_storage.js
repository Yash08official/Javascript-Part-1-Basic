// It is an object which is basically used to store the key value pairs in the browser
// When you want to store something in browser we used local storage

// localStorage.setItem("name", "Yash"); // set
// const value = localStorage.getItem("name"); // get
// console.log(value);

// const value1 = localStorage.setItem("roll No", "04"); // set
// console.log(value1);
// localStorage.removeItem("name"); // remove
// localStorage.clear(); // clear all

localStorage.setItem("name", "Yash"); // / set
const value1 = localStorage.setItem("roll No", "04"); // set
console.log(localStorage.length);
console.log(localStorage.key(0));

localStorage.hobby = " Teaching"; // adding custom item
delete localStorage.hobby

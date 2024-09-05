// lets discuss about shadowing properties

let myDate = new Date(2024, 11, 3);
// let say I want to create my own method

myDate.getFullYear = function () {
  console.log("New date function added");
};

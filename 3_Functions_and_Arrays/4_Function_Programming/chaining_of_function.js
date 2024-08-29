// chaining of map , filter and reduce

// What is chaining

// In a question if you want to apply all of the things together , how we can do it
// suppose, we have a question where we have to print total marks of students with marks greater
// than 60 after 20 marks have been added to those whose scored is less than 60

const students = [
  {
    name: "Yash",
    lastname: "Wasankar",
    marks: 80,
  },
  {
    name: "Yash",
    lastname: "W",
    marks: 84,
  },
  {
    name: "Yash",
    lastname: "ankar",
    marks: 83,
  },
  {
    name: "Yash",
    lastname: "kar",
    marks: 89,
  },
  {
    name: "Yash",
    lastname: "ar",
    marks: 86,
  },
  {
    name: "Yash",
    lastname: "rao",
    marks: 25,
  },
  {
    name: "Yash",
    lastname: "Mr",
    marks: 37,
  },
  {
    name: "Yash",
    lastname: "u",
    marks: 52,
  },
];

// If my marks are less than 60 then I have to add 20 marks
// If marks greater than 60 then you will add their total marks

const marksUp = students.map(function (x) {
  if (x.marks < 60) {
    x.marks = x.marks + 20;
  }
  return x;
});
console.log("Is marks update :", marksUp);

const filterStud = marksUp.filter(function (x) {
  if (x.marks > 60) {
    return x;
  }
});
console.log("Is it give filter students data :", filterStud);

// Print total marks of all those students

const reduceData = filterStud.reduce(function (accumulator, currElement) {
    accumulator = accumulator + currElement.marks;
    return accumulator;
}, 0);

console.log("Print total marks data :", reduceData);



// const marksUp = students.map(function (x) {
//     if (x.marks < 60) {
//       x.marks = x.marks + 20;
//     }
//     return x;
//   }).filter(function (x) {
//     if (x.marks > 60) {
//       return x;
//     }
//   }).reduce(function (accumulator, currElement) {
//     accumulator = accumulator + currElement.marks;
//     return accumulator;
// }, 0);
//Example
{
  const er = 10;
  console.log('Variable output using "CONST" is :', er);
}

// You cannot use it like this
// {
//   const brw = 10;
// }
// console.log('Variable output using "CONST" is :', brw);
// ReferenceError: brw is not defined

// const awe = 110;

// awe = 1212;
// {
//   let aw = 110;
//   console.log('Variable output using "CONST" is :', aw);
// }
// console.log('Variable output using "CONST" is :', awe);
// output : TypeError: Assignment to constant variable.

// You can declare it like this in LET

let a;
a = 23;

// You cannot declare it like this in case of CONST

// const b; // It will say : 'const' declarations must be initialized.
// b = 23;

const fruits = ["Mango", "Orange", "Apple", "Bananna"];
// const keyword used to point unique reference

fruits[0] = "Guava"; // do it like this also

console.log(fruits);

// For objects :

const student = {
  firstName : "Yash",
  middleName: "Prashant",
  lastName: "Wasankar",
};
console.log(student);

// You can update the object also

student.hobby = "Cricket";
console.log(student);
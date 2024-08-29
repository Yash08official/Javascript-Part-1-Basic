// Every and Sum method
// Lets talk about every method

// What does every method do ?
// It basically takes a function and it executes that function for every array element and it returns true ,
// if all the array elements matches the condition or matches the condition which is present in the function

// If any of the array element does not match the condition it returns false

// Let say I have an array of ages and I have to check whether all the elements present in the array denotes
// adult or not
// So check if every person in array is adult or not
// So how do we check
// We know , the person is adult if its age greater than 18 so we can write a function

function checkAge(age) {
  if (age > 18) {
    console.log("The person is adult");
  } else {
    console.log("The person is not adult");
  }
}

checkAge(12);

// Let say we have an array of ages

const ages = [12, 43, 22, 12, 45, 17, 78];

const isAges = ages.every(
  // ages => ages >= 18
  function (age) {
    ages >= 18;
  }
);

console.log("Is person adult :", isAges);

// Some method

// Lets talk about some method
// If even one element in an array satisfies the condition then will gives or return true

const isKid = ages.some(
     kid => kid < 18
//     function (age) {
//   age < 18;
// }
);
console.log("Is kid present :", isKid);

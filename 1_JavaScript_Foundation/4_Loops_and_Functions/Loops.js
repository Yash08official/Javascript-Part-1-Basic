// Question 1 : I have to print number from 0 to 10 {Use of for loop}

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// {Used of for in loop}

const User = { Yash: 99, Virat: 100, Genius: 98 };

for (const key in User) {
  console.log(User[key]);
}

// {Used of for of loop}

const fruits = ["Guava", "Apple", "Banana", "Orange", "Mango"];

for (const iterator of fruits) {
  console.log(iterator);
}

// Used of while loop

let value = 0;
while (value <= 10) {
  console.log(value);
  value++;
}

// Used of dowhile loop

let num = 0;
do {
  console.log(num);
  num++;
} while (num <= 5);

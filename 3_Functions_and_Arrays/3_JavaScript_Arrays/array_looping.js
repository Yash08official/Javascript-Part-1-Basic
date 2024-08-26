// Suppose we have an array
const fruits = ["Apple", "Banana", "Grapes", "Oranges"];
// One way to print it is like
console.log("Fruits in the array :", fruits);
// another way is
console.log("Fruit 1 :", fruits[0]);
console.log("Fruit 2 :", fruits[1]);
// again one way using loop
console.log("------for loop----------");

for (i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// We also have "for of" loop
console.log("---------for of------------");
for (let fruit of fruits) {
    console.log(fruit);
}

// We also have "for in" loop
console.log("---------for in------------");
for (let x in fruits) {
    console.log(fruits[x]);
}


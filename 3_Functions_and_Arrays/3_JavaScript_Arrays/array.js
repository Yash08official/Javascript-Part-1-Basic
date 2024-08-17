// Collection of multiple values inside one variable
// If you are trying to put multiple values in one variable is called as ARRAY

// If we have to store list of fruits

const fruits = ["Mango", "Banana", "Apple", "Guava"];
// If we have to access any element inside this array for that we used "indexes"
//so we can access it like as follows ::->
console.log("fruit name is :", fruits[0]); // Array follows 0 base indexing so it will return fruit "Mango"
console.log("fruit name is :", fruits[1]); // Array follows 1 base indexing so it will return fruit "Banana"
console.log("fruit name is :", fruits[2]); // Array follows 2 base indexing so it will return fruit "Apple"
console.log("fruit name is :", fruits[3]); // Array follows 3 base indexing so it will return fruit "Guava"

console.log("Array : fruits : =", fruits);
fruits[1] = "Grapes";
console.log("New fruit name is :", fruits[1]);
// Output will be Grapes instead of Banana
fruits[2] = "Orange";
console.log("New fruit name is :", fruits[2]);
// Output will be Orange instead of Apple

// If I print whole array 
console.log("New Array : fruits : =", fruits);

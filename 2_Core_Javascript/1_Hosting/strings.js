let firstName = "Yash Wasankar"; // String
console.log(typeof firstName);

let secondName = "Prashant Wasankar"; // This is also a string
console.log(typeof secondName);

let sentence = 'My name is "Yash" Wasankar'; //  \ ::-> escape
console.log(sentence);
console.log(sentence.length);

let words = "It's alright";
console.log(words);
console.log(words.length);

let newName = "Name : Yash Wasankar";
console.log(newName);
console.log(typeof newName); // String

// Strings as an Object

let fullName = new String("Name : Yash Wasankar");
console.log(fullName);
console.log(typeof fullName); // object

console.log(newName == fullName); // true
console.log(newName === fullName); // false : type is object

let color1 = new String("blue");
let color2 = new String("blue");
console.log(color1 == color2);

// when you compare two object it gives you false (double or tripple equal to). Thats why should avoid strings as an object

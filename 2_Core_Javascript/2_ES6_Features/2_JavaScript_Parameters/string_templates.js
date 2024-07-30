// Use of backtics

let institute = "Yash";
//Or you can write it also as

let name = `Yash`; // Valid

// String template supports multiline string also like this ::->
let sentence = `lorem
lorem
lorem
lorem
lorem`;

let firstName = "Yash";
let lastName = "Wasankar";

let welName = `Welcome ${firstName} ${lastName}`;
console.log("Welcome message is :", welName);

//also

let a = 10;
let b = 20;
let add = `Sumof two number is ${a + b} `;
console.log("result is :", add);

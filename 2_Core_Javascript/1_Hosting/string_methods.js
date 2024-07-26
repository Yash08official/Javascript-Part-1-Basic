let text = "Yash Wasankar CS Enginer CS CS CS ";

console.log("Length of the string is :", text.length); // text.length

text.replace("CS", "Computer");
console.log(text); // output :  Yash Wasankar CS Enginer

//for changing you have to collect it in variable

const replaceString = text.replace("CS", "Computer");
console.log(replaceString);

const replaceAll = text.replaceAll("CS", "Computer");
console.log(replaceAll);

//split method
const splitString = text.split(" ");
console.log(splitString);

let randomText = "Yash, Wasankar, CS, Engineer";
const replaceStringSplit = randomText.split(",");
console.log(replaceStringSplit);

// repeat method
console.log(text.repeat(2));

// trim method
const trimText = "       Yash Wasankar   ";
console.log(trimText.length);

const trim = trimText.trim();
console.log(trimText.trim());

// trimStart
const trimText1 = trimText.trimStart();
console.log(trimText1.trimStart());
console.log(trimText1.length);

// trimEnd
const trimText2 = trimText.trimEnd();
console.log(trimText2.trimEnd());
console.log(trimText2.length);

// concat

let firstName = "Yash";
let lastName = "Wasankar";
const fullName = firstName.concat(lastName);
console.log(fullName);

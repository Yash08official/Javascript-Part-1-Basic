let text = "Yash Wasankar CS Enginer CS CS CS ";

console.log("Length of the string is :", text.length); // text.length

text.replace("CS", "Computer");
console.log("text.length is :", text); // output :  Yash Wasankar CS Enginer

//for changing you have to collect it in variable

const replaceString = text.replace("CS", "Computer");
console.log("text.replace is :", replaceString);

const replaceAll = text.replaceAll("CS", "Computer");
console.log("text.replaceAll is :", replaceAll);

//split method
const splitString = text.split(" ");
console.log("text.split is :", splitString);

let randomText = "Yash, Wasankar, CS, Engineer";
const replaceStringSplit = randomText.split(",");
console.log("randomText.split is :", replaceStringSplit);

// repeat method
console.log("text.repeat is :", text.repeat(2));

// trim method
const trimText = "       Yash Wasankar   ";
console.log(trimText.length);

const trim = trimText.trim();
console.log("trimText.trim is :", trimText.trim());

// trimStart
const trimText1 = trimText.trimStart();
console.log("trimText.trimStart is :", trimText1.trimStart());
console.log(trimText1.length);

// trimEnd
const trimText2 = trimText.trimEnd();
console.log("trimText.trimEnd is :", trimText2.trimEnd());
console.log(trimText2.length);

// concat

let firstName = "Yash ";
let lastName = "Wasankar";
const fullName = firstName.concat(lastName);
console.log("firstName.concat(lastName) is :", fullName);

// charAt : check the position of the character

let oneString = "Hello Jhon Wick !!!";
// character at the position , You have to specify the position from 0 to last
console.log("oneString.charAt is :", oneString.charAt(0));
//output : H

// charCodeAt : Character encoding . It shows the code of the character
//ASCII codes = A -Z starts from 65
let oneString2 = "I am Jhon Wick !!!";
console.log("oneString2.charCodeAt is :", oneString2.charCodeAt(6));
console.log("oneString2.at is :", oneString2.at(-6)); // reads characters from last to first so from last 6 index or character is "c"

//
console.log("oneString2 is :", oneString2[0]);

//
oneString2[2] = "H"; // Strings are immutable . not change any character of string
console.log("oneString2 result is :", oneString2);

// If you want to extract a character from a string for that we have method called 'SLICE'

// Slice : Taking a sub string from a string {Extract a portion of a string and written a new string}

let textSlice = "adcdefghijklmnopqr";
console.log("textSlice.slice(2) is :", textSlice.slice(2)); // starting c which index is 3
console.log("textSlice.slice(4, 8) is :", textSlice.slice(4, 8)); // starting from index 4 to 7

//It will also start character from back like index -1, -2,-3,...

// SubString : It is same as Slice but it dont take negative indexing if you give negative indexing then it will consider it as zero

console.log("textSlice.substring(4, 8) is :", textSlice.substring(4, 8));
console.log("textSlice.substring(2) is :", textSlice.substring(2));

//substr : In case of subStr we have second parameter as the length so when you say

console.log(textSlice.substr(0, 4)); // "0" index and "4" characters (length of the string)

// toLowercase
const toLowercaseString = "ABCDEFGHIJKLmnopqrstuvwxyz";
console.log("toLowercaseString is :", toLowercaseString.toLowerCase());

//toUpperCase
const toUpperCaseString = "ABCDEFGHIJKLmnopqrstuvwxyz";
console.log("toUpperCaseString is :", toUpperCaseString.toUpperCase());

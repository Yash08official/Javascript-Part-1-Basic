// let dayNumber = new Date().getDay();
let dayNumber = 2;

console.log("Day number is", dayNumber); // It will todays day

let day;
let msg;

switch (dayNumber) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day: "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    msg = "Please provide valid number";
}

if (msg) {
  console.log("Messgae :", msg);
} else {
  console.log("Day of the week is :", day);
}

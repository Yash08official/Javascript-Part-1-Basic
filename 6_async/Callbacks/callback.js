// I have to function

function createMsg(name) {
    const msg = `Hello ${name}`;
    return msg;
} // You have a function for creating a message

function displayMsg(msg) {
    console.log(msg);
} // you have af function to display the message

// You have to call it in a order

const res = createMsg("Yash");
// console.log(`create msg res is ${res}`);
displayMsg(res);


// simple technique
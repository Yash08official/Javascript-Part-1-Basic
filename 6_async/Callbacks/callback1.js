function createMsg(name, callback) {
  setTimeout(() => {
    const msg = `Hello ${name}`;
    callback(msg);
  }, 1000);
} // You have a function for creating a message

function displayMsg(msg) {
  console.log(msg);
} // you have af function to display the message

// You have to call it in a order
createMsg("Yash", displayMsg);

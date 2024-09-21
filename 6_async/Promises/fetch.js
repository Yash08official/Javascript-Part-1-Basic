// It is a API provided by browser basically to fetch any data from the external server

// API : whenever you are making any request , so have a client  and you are making any request to the server
// so you make that request using server
// Basically you make an API call from client to server  and then server returns the response
// If i have to make the API call inside my javascript I can use fetch API

const promiseObject = fetch("https://dummyjson.com/products/1");
console.log(promiseObject);

promiseObject
  .then((response) => response.json())
  .then((result) => console.log(result));

promiseObject.catch((err) => console.log(err));

console.log("req started");

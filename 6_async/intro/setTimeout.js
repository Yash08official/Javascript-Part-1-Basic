// Javascript is a single threaded synchronous language but use of callbacks, promises, event loop, it can behave asynchronously



//setTimeout is a web api , this is provided to us by browser WHICH allows us to execute some code after some delay





// set time out takes a callback function in it and also takes a timer at the end 
// a function which is passed as an argument

setTimeout(() => {
    console.log("Python 1");
}, 1000);

setTimeout(() => {
    console.log("javascript 2");
}, 2000);

setTimeout(() => {
    console.log("javascript 0");
},0);

// we will see in the next video but
// understand it is a one web Api call which is using the fetch API on browser so browser providing it
//fetch API of browser
fetch('https:/dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));


setTimeout(() => {
    console.log("Java 3");
}, 3000);

console.log("Java 0");

// It means that you are adding a delay and a piece of code adding in some time

// we also learn microtask queue
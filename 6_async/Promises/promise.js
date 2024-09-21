// Create and consume the promise

//It is basically a object inside js which is basically used  in asynchronous programming
// this basically tells us I promise you that you will get the result
// so there is some piece of code which is producing a result for us and it will time and then there is a
// consumer code which is waiting for that result to come
// so what happens , this is a promise
// basically a promise is a connection between these two codes where there is a code which is producing a result
// and this is taking some time to produce , this will give you a promise that ok, i will give you result so this
// promise maybe sometime later and there is a code which is waiting to consuming the promise , this is basically
// waiting for the result so whatever the code is producing will basically the consuming code wait for this result

const promise = new Promise(function (resolve, reject) {
  // two callback function resolve and reject
  // this is how promise is created

  let promiseRes;

  // let say you are adding set timeout here
  setTimeout(() => {
    // doing some calculation
    promiseRes = true;

    if (promiseRes) {
      resolve("Completed");
    } else {
      reject("Rejected");
    }
  }, 1000);

  // this is how you can call
});

console.log("Promise is :", promise);
// consuming code now
// .then is used whenever your promise if fulfilled it will code this resolve method

promise.then((result) => console.log(result));
// if promise is rejected
promise.catch((err) => console.log(err));

console.log("king kohli");

// three states of promise
// 1. pending
// 2. fulfilled
// 3. rejected

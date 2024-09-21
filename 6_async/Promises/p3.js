// Write a JavaScript function simplePromiseDemo that:

// Returns a Promise.
// Logs "Promise is pending..." immediately when the function is called.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// After the delay, resolves the Promise with a success message "Promise fulfilled: Data received!" if the operation is successful.
// After the delay, rejects the Promise with an error message "Promise rejected: Error occurred!" if the operation fails.

function simplePromiseDemo(success) {
  // Return a Promise
  return new Promise((resolve, reject) => {
    // Log "Promise is pending..."
    console.log("Promise is pending...");

    setTimeout(() => {
      // Simulate a network request with setTimeout

      if (success) {
        resolve("Promise fulfilled: Data received!");
      } else {
        reject("Promise rejected: Error occurred!");
      }
      // Resolve or reject the Promise based on the success flag
    }, 2000);
  });
}

// Demonstrate fulfilled state
simplePromiseDemo(true)
  .then((message) => {
    // success
    console.log(message);
  })
  .catch((error) => {
    // error
    console.log(error);
  });

// Demonstrate rejected state
simplePromiseDemo(false)
  .then((message) => {
    // success
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

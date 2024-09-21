// Write a JavaScript function fetchData that:

// Returns a Promise.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// Resolves the Promise with a success message "Data fetched successfully!" if the simulated request is successful.
// Rejects the Promise with an error message "Error fetching data!" if the simulated request fails.
// Additionally, create a function processData that:

// Calls the fetchData function.
// Uses .then() to handle the successful resolution of the Promise and logs the success message to the console.
// Uses .catch() to handle the rejection of the Promise and logs the error message to the console.
 

// Expected Output:

// Data fetched successfully!
// Error fetching data!

function fetchData(success) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Simulate a network request with setTimeout
        setTimeout(() => {
            // Resolve or reject the Promise based on the success flag
            if(success){
                resolve("Data fetched successfully!");
            }else{
                reject("Error fetching data!");
            }
        },2000);
    });
}

function processData(success) {
    // Call fetchData
    fetchData(success)
    .then((message) => {
        // Handle the success case with .then()
        console.log(message);
    })
    .catch((error) => {
        // Handle the failure case with .catch()
        console.log(error)
    });
}

// Simulate a successful request
processData(true);

// Simulate a failed request
processData(false);
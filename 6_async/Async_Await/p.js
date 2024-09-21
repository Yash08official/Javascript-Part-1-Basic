// Write a JavaScript function fetchUserData that:

// Returns a Promise.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// Resolves the Promise with user data { id: 1, name: 'John Doe' } if the request is successful.
// Rejects the Promise with an error message "Failed to fetch user data" if the request fails.
// Next, create an async function getUserData that:

// Calls the fetchUserData function.
// Uses await to wait for the Promise to be resolved or rejected.
// Logs the user data if the Promise is resolved.
// Catches and logs the error if the Promise is rejected.

function fetchUserData(success) {
    // Return a Promise
    return new Promise((resolve, reject) => {
        // Simulate a network request with setTimeout
        setTimeout(() => {
            // Resolve or reject the Promise based on the success flag
            if(success){
                resolve( { id: 1, name: 'John Doe' });
            }
            else{
                reject("Failed to fetch user data");
            }
        },2000)
    })
}

async function getUserData(success) {
    // Try to call fetchUserData with await
    // Catch and log the error if the request fails
    try {
        const userData = await fetchUserData(success);
        console.log(userData);
    } catch (e) {
        console.log(e);
    }
}

// Demonstrate successful request
getUserData(true);

// Demonstrate failed request
getUserData(false);
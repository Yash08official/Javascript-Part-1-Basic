// Write a JavaScript function fetchAllData that:

// Creates three separate functions (fetchData1, fetchData2, fetchData3) that each return a Promise.
// Each function simulates a network request using setTimeout to delay the operation by different durations:
// fetchData1: Resolves after 1 second with a message "Data from fetchData1".
// fetchData2: Resolves after 2 seconds with a message "Data from fetchData2".
// fetchData3: Resolves after 3 seconds with a message "Data from fetchData3".
// Uses Promise.all() to execute all three Promises concurrently.
// Logs the results if all Promises are resolved.
// Catches and logs the error if any Promise is rejected.
// Expected Output:

// ["Data from fetchData1", "Data from fetchData2", "Data from fetchData3"]

function fetchData1() {
    
    return new Promise((resolve , reject) => {
        // Return a Promise that resolves after 1 second
        setTimeout(() => {
            resolve("Data from fetchData1");
        }, 1000);
    });
}

function fetchData2() {
    // Return a Promise that resolves after 2 seconds
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data from fetchData2");
        }, 2000);
    });
}

function fetchData3() {
    // Return a Promise that resolves after 3 seconds
        return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, 3000);
    });
}

function fetchAllData() {
    // Use Promise.all() to execute all fetchData functions concurrently
    Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
        // Handle the resolved results
        console.log(results);
    })
    .catch((results) => {
        // Handle any rejected Promise
        console.log(results);
    })
}

fetchAllData();
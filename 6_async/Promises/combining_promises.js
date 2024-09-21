// https://dummyjson.com/products/1
// https://dummyjson.com/users/1
// https://dummyjson.com/posts/1

const firstObj = fetch("https://dummyjson.com/products/1").then((response) =>
  response.json()
);

const secondObj = fetch("https://dummyjson.com/users/1").then((response) =>
  response.json()
);

const thirdObj = fetch("https://dummyjson.com/posts/1").then((response) =>
  response.json()
);

// Promise.all([firstObj, secondObj, thirdObj])
//   .then((responses) => {
//     for (response of responses) {
//       console.log(responses);
//     }
//   })
//   .catch((error) => console.log(`Failed to fetch the ${error}`));

// Promise,any now

Promise.any([firstObj, secondObj, thirdObj])
  .then((responses) => {
    console.log(responses);
  })
  .catch((error) => console.log(`Failed to fetch ${error}`));

// https://dummyjson.com/products/1

// function fetchData() {
//   fetch("https://dummyjson.com/products/1")
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// }
// fetchData();

// Same thing can be done using async and await

async function fetchDataResponse() {
  try {
    const response = await fetch("https://dummyjson.coma/products/1");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchDataResponse();

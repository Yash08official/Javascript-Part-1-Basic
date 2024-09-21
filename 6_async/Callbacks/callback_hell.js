// I have one function

function firstFunction(val, callback) {
  setTimeout(() => {
    const result = val + 1;
    callback(result);
  }, 1000);
}

function secondFunction(val, callback) {
  const result1 = val + 2;
  callback(result1);
}

function thirdFunction(val, callback) {
  const result2 = val + 3;
  callback(result2);
}

// function doOperation() {
//   let result = 0;
//   result = firstFunction(result);
//   result = secondFunction(result);
//   result = thirdFunction(result);
//   console.log(` result is ${result}`);
// }

// This is a pyramid of Doom

function doOperation() {
  firstFunction(0, (result) => {
    secondFunction(result, (result1) => {
      thirdFunction(result1, (result2) => {
        console.log(
          `result is using callback function when we used setTimeout ${result2}`
        );
      });
    });
  });
}

doOperation();

// callback hell is  " a situation where  multiple nested callbacks make the code difficult to read and maintain"

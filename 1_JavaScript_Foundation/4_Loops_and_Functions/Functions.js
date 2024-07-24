function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(2, 5);

const result2 = sum(23, 5); // reused it 
console.log("Result :", result);
console.log("Result :", result2); // resused result


function hello(){
  let name = "Hello world"; // This ("let name") is a local variable  
   console.log("Name is :",name);
  }
  
  hello();

  //end
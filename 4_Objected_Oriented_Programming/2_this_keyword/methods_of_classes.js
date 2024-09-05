// Let discuss about call, apply, bind method

// Whenever you have an object and that object has a method
// let say you want to share that method with other objects
// In this case , whenever you have to share a function with other objects
// you can use call, apply, bind method

// let see how

// Basically it is used for "function sharing"

// let say I have a object

const obj1 = {
  firstName: "Rahul",
  lastName: "Kumar",
  // that object ahs a method called printFullName
  printFullName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};
obj1.printFullName();

// let say we have another user (object)

const obj2 = {
  firstName: "Jon",
  lastName: "Doe",
};

// call : call the other objects method

obj1.printFullName.call(obj2);

const obj3 = {
  firstName: "Rahul2",
  lastName: "Kumar",
};
let printFullName1 = function () {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
};

printFullName1.call(obj3);

// If you are write it as

let printFullName2 = function (color) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and my favorite color is ${color}`
  );
};

// then you can write it as
printFullName2.call(obj3, "orange"); // you are passing parameter in it

let printFullName3 = function (color, hobby) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and my favorite color is ${color} and my hobby is ${hobby}`
  );
};

printFullName3.call(obj3, "red","Playing cricket");


// This is how we used call method

// Let discuss about next method which is "Apply"

// Apply method is similar to call but there is a basic difference is

printFullName3.apply(obj3, ["red", "Playing cricket"]);
// You can simply put it in a array
// And both ae used for function sharing

// we have one more method "Bind"
// It is also same but only there in case of bind you cannot directly call a function

// In this , a function is return and you can call it later
// So you can simply write it like this

const printName = printFullName3.bind(obj3, "red", "Playing cricket");
console.log(printName);
// Here you can see that it is called later and it is not called in the same time when
// you are calling the bind method
printName();
// so we write it like this



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
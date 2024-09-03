// JavaScript uses objects and classes to structure the code
// OOPS is a instance of a class , It represent a specific entity with its own unique state (properties) and behavior(methods)

//Objects :
//In everything inside javascript , including functions and arrays
// It is the collections of key value pairs :
                                        // values can a primitive data types(String,Boolean,number, etc)
                                        // Values can be other objects
                                        // Values can be  functions
                                        


// Classes :
// Javascript introduced class syntax in ES6
// Classes are syntactic sugar over prototypes (Javascript is basically prototype based languages)
// Javascript basically follows objects and prototypes and classes like syntactic sugar why because people 
//come from languages like c++, java
//  so , it just to make them feel comfortable. classes was introduced into ES6
// It provide structure way to work with prototypes

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// What are properties and Methods

//Properties are Characteristics/ attributes of an object
// Methods are actions/functions that an objects can perform

// Both properties and methods are defined inside the class


// Inheritance :
// (When you have a period class and you want to take properties from parent class , it is called as inheritance)
// Inheritance is a mechanism in which one class can inherit the properties and methods of another class

// You have a class and you are creating a sub class which takes all the properties of the parent class

// Javascript supports inheritance through the use of prototypes but in case of classes also you
// can create a subclass
//which will take all the properties and methods from a super class

class students extends person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(` ${this.name} is studying`);
    }
}

// Encapsulation :

// Now, we are see we are putting all the properties functions,methods in one single class,
// So this is called as encapsulation
// Inside objects also we can keep all the properties and method together
// It hide internal state of an object
// Only necessary functionality is exposed through methods

// Polymorphism :

// When you treat a class ,  let say you treat a person class , now there can be many person who
// used that class , You can create multiple objects for that class
// When you can create multiple objects as instances of a class this called this is called as polymorphism
// So, JavaScript supports polymorphism both through class and through prototype based model
// That means you can create multiple instances of the same class

// This is about object oriented programming where you used objects and classes to structure your code
// It also supports inheritance, it has polymorphism , encapsulation and all these properties


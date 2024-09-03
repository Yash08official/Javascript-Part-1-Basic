// we will understand inheritance concept now
// I have a class and i want to create a child class for that class
// and the child class will have al the characteristics of the parent class but it can have its own extra features
// That is called as inheritance
// Basically the child is inheriting all the properties and methods, features of its parent class

// Lets say we have a customer class again

class className {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  printDetails() {
    console.log(
      `Name and Email of the customer is : ${this.name} and  ${this.email}`
    );
  }
  get info() {
    return this.name;
  }
}
const customer = new className("King", "abc@gmail.com");
console.log(customer);
customer.printDetails();
console.log(customer.info);

// creating child class of parent class "className"
class VIPCustomer extends className {
  constructor(name, email, VIPlevel) {
    // When you define customer you have to called parent constructor
    // This is not a child class for creating a child class you have to write "extends" keyword
    // In this I will take 1 more keyword which is VIPlevel.So to assign name and email we dent need
    // to create a separate variable in the child class, then you can simply used "super" keyword
    // Super : It is used to call the constructor of the parent class
    //When you are using super class then you are calling the constructor of the parent class

    super(name, email);
    //and for VIPlevel you can create a local variable in the castile class
    this.VIPlevel = VIPlevel;
  }
  // Let say you have one function here where you are updating the VIPlevel
  // In this person will send some label
  updateVIPlevel(level) {
    // we call VIPlevel this is equals to level which is passed
      this.VIPlevel = level;
      console.log("VIP level is :",this.VIPlevel);
  }
}

// Lets say i am creating a object for this VIP customer
const VIPCustomer1 = new VIPCustomer("Alice", "alice@gmail.com", "Diamond");
const VIPCustomer2 = new VIPCustomer("Vinod", "vinod@gmail.com", "Silver");
console.log(VIPCustomer1);
console.log(VIPCustomer2);
VIPCustomer1.printDetails(); // It is calling a function which is written in the parent class
VIPCustomer2.printDetails();
VIPCustomer1.updateVIPlevel("Platinum");
VIPCustomer2.updateVIPlevel("Gold");

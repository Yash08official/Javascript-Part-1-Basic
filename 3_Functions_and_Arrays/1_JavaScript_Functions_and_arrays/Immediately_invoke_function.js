// If I say I am declaring any function which prints hello

function print() {
  console.log("Hello");
}
print();
// That time
// Then we have to invoke the function from outside or call that function from outside then if I run this it will print "Hello"

//But what is immediately invoke function expression
// The function which are called automatically which are self invoking we don't have to call them from outside , Those are called as immediately invoke function
// you have to write it as

(function name(params) {
  console.log("Immediately invoke function write it as");
})();

// This function will call automatically , you don't need to call explicitly , now if you run this it will print

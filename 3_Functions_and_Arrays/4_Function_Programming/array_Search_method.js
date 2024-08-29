// Array search method
// find method:
// find method takes a function and executes that function for every array element and it finds and it returns
// the first element which satisfies the condition
// So, basically it returns first element of array which satisfies the condition

const arr = [10, 2, 3, 4, 5, 6, 7, 8, 12];
// And I want to find the any even numbers

const res = arr.find(
    function (ele) {
        return ele % 2 == 0;
    }
)

console.log(res);

// Similar to find you have another method called "findLast"

// It finds the last element which matches the condition

const resN = arr.findLast(
    function (elem) {
        return elem % 2 == 0;
    }
)
console.log(resN);

// findIndex:

// Whatever you have find you have to find the index of the element
// In which position it will be

const In = arr.findIndex(
    function (elem) {
        return elem % 2 == 0;
    }
)
console.log(In);

const lastIn = arr.findLastIndex(
    function (elem) {
        return elem % 2 == 0;
    }
)
console.log(lastIn);
 // Create a function named findNegative that finds the first negative number
// in an array using Array find().If negative number exists,
//  it should print - 1 else print all the elements of the array.

const Array = [1, 2, 3, 4, -5];
function findNegative(arr) {

const negNum =arr.find(
	    function(x){
	        if(x < 0)
	        return x
	       }
	        )
    if (negNum !== undefined) {
        return -1
    }
	      else{
	          console.log(arr);
	      }
	  }      
console.log(findNegative(Array));
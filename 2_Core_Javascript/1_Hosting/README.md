<h1> Hosting And Strings in JavaScript </h1>

<h3>Execution context in JavaScript </h3>

Execution context : Everything in JavaScript is executed in an environment which is called as Execution context

Lets understand this,
If you write any piece of code and execution context is created for that piece of code and it runs in two phases first is "Memory Allocation" and "Code Execution" phase

You see a piece of code ::->
var X =10;  
function sum(a,b) {
return a + b;
}

const result = sum(2, 5);

console.log("Result :", result);

What happens ::->

<h4> Memory Allocation </h4>

Memory is allocated to all the variables and functions present here
Firstly memory is allocated . If we start allocating the memory we have first a variable "X" with a value of 10
So it will not intialize the value to this variable , It will just create a memory for this variable "X" So a variable X is put in a memory . The space will be allocated for this varaible X and the value for this will be undefined

Then you have a function Sum and all the details of this function will be putted in this memory so basically a memory will be allocated for this function . Next will be the variable result so again a memory will be allocated for this variable and then you will see undefined Bascially value is not intailized for this memory allocation phase , only the memory is allocated and next is the execution statement

So , in the memory allocation phase,for the piece of code memory allocated not the value is allocated


<h4> Code Execution </h4>

When we start executing this codeit execute line by line, So first top line will be executed 

It says , Var X = 10 that means now it will execute this statement X=10
so in the memeory the memory is provided the value of X is undefined Bascially space was provided in the memory for value of X and the value of undefined and now undefined will br removed and the value of 10 will come Then we have this function return that is already present in the memory then we have Var result is equals to  SUM 2 and 3 basically

Now we are calling this function SUM with values 2 and 3 Since I am calling this function with value of 2 and 3 and then it will return 2 + 3 which is equivalant to five

When we are calling this function inside this execution context another execution context will be created . This will be the local execution context for some function and there are two phases one will be memory allocation phase and another will be the code exection phase and then you are saying SUM that means you are calling this function with this values 2 and 3 and it will be returning 2 + 3 is 5 So this whole code will be executed

If you see in this function , we dont have any variable so atleast no memory is required
Only execution will happen a + b equals 5 and then it will moved inside this result


So , In the result we will get the value 5 and the undefined will be replaced with 5 and last it will execute console.log result and then the result will be printd

IMP : WHEN FUNCTION IS CALLED THE ANOTHER EXECUTION CONTEXT GET CREATED (Memory Allocation and Code Execution)

THIS IS HOW EXECUTION CONTEXT GET CREATED

THIS IS A GLOBAL EXECUTION CONTEXT

When this execution gets created , we also have a "Call Stack" 

In the Call stack there is a GLOBAL EXECUTION CONTEXT now whenever a function called a local execution execution context gets created for that function

as soon as get gets executed it gets removed from stack or will be popped out and similary there are more functions comming here one by one and then  they will be executed and they will be removed from the stack and at last global execution context gets executed completely

"THIS IS HOW JAVASCRIPT EXECUTE AND JAVASCRIPT WORKS" any code you run in JS memory allocation is done and the code execution is done


<h3>Variable Hosting in Javascript </h3>
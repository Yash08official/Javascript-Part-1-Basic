Code gives you a token to manage the asynchronous task 
that means your program initiate the task which may take some time then it will return a promise it will not wait for that task to complete
Your program will give you a promise that you go and do some other piece of work . In the meantime, you take this token and you can continue the with other work and later on I will complete and come back to you

So the promise allows the program to do continue with the other task and your program can continue with other task without waiting for the asynchronous operation to complete

Your asynchronous operation which is taking some time it will not wait and hold freeze the other execution

Once the asynchronous task is finished , the promise is fulfilled, signaling to the program to the program that the data is ready for use
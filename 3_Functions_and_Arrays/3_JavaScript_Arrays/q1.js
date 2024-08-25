// Write a JavaScript function manageTasks(tasks) that takes a one-dimensional array (tasks) as input and performs the following tasks:

// Add Task: Add a new task to the end of the list using push().
// Remove Task: Remove the last task from the list using pop().
// Complete Task: Complete the first task in the list using shift().
// Add Priority Task: Add a high-priority task to the beginning of the list using unshift().
// Display Tasks: Display all tasks in the list after each operation.


function manageTasks(tasks) {
    console.log('Initial Tasks:', tasks);
  
    // Add Task
    function addTask(task) {
        tasks.push(task);
        console.log(`Added "${task}" to the tasks.`);
    }
  
    // Remove Task
    function removeTask() {
        const removedTask = tasks.pop();
        console.log(`Removed "${removedTask}" from the tasks.`);
    }
  
    // Complete Task
    function completeTask() {
        const completedTask = tasks.shift();
        console.log(`Completed "${completedTask}".`);
    }
  
    // Add Priority Task
    function addPriorityTask(task) {
        tasks.unshift(task);
        console.log(`Added high-priority task "${task}" to the beginning.`);
    }
  
    addTask('Study JavaScript');
    addTask('Finish Project');
    removeTask();
    completeTask();
    addPriorityTask('Prepare Presentation');
  }
  
  const tasks = [];
  manageTasks(tasks);
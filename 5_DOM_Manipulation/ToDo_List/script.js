// we need text area so we can take out this textarea
const textArea = document.querySelector(".textarea");
// console.log(textArea);
// Now I also need the button
const button = document.querySelector(".buttoninput");
// console.log(button);

const todolist = document.querySelector(".todolist");
// console.log(todolist);


// Basically i want to create div where all the text added  in it

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
    console.log("btn clicked");
    console.log(textArea.value); // this we write when button click the value get appear

    // Now I write the logic inside it whatever I need to do
    // First I need to create a div

    const toDoDiv = document.createElement("div");
    // Let say now inside this div I need to create a paragraph
    toDoDiv.classList.add("itemall"); // due to this we crate one class and add this 

    const item = document.createElement("p"); // we create a paragraph
    // now inside this paragraph i need to push the value whatever I type in as a "task" 
    // for that i can say
    item.innerHTML = textArea.value; 

    item.classList.add("item"); // we again add class as "itemall" added using it whatever I type with style appear at website

    // we se what is created here we write
    // console.log(item);
    // it will appear now i want to put this paragraph in a div which div which is "toDoDiv"
    // now toDoDiv is a parent and I want the paragraph as a child 
    // I can say 
    toDoDiv.appendChild(item); // In the parent div i have append item
    // now , lets check how this div looks like

    
    // console.log(toDoDiv);
    
    // Now I want to put this div in my page not on console now below the list
    // that means I want to add it in "<div class="todolist" id="todo"></div>" this div
    
    // lets take that div 

    // now I get this "const todolist" at upper side
    
    
    // Now this todoList I want to append the new div which i created which is  "toDoDiv"
    
    
    // before appending the todolist i want to check some condtion
    
    if (textArea.value == '') return; // by using it when we are not add anything it will not added

    // lets create a button to delete
    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // added icon
    deleteButton.classList.add("trash-button"); // I added class again 
    // now this is a simple empty button which is created and this button I need to add inside "toDoDiv"
    // so i just simply say
    toDoDiv.appendChild(deleteButton); // here I added delete button

    console.log(toDoDiv);

    
    todolist.append(toDoDiv);

    // If i am adding something after adding the textarea becomes empty for that
    textArea.value = ''; // it will work , it will be empty 

    // console.log(toDoDiv);

    // now after clicking the text appear on website
}

todolist.addEventListener("click", deleteItem);
function deleteItem(event) {
    const item = event.target; // this will give the item inside this clicked
    console.log(item);

    if (item.classList[0] == 'trash-button') { // when this button has been clicked
        const parent = item.parentNode; // I can take the parent element
        parent.remove(); // and remove that parent element
    }
}
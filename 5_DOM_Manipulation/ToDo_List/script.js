const textArea = document.getElementsByTagName(".input");
console.log(textArea);

const button = document.getElementsByTagName(".button");
console.log(button);

button.addEventListener("click", addToDoListItem());

function addToDoListItem() {
  console.log("Button clicked");
}

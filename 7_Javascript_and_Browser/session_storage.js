// If you are storing something in particular tab and you are opening a new tab or getting it in a new window
// your data does not stay

const field = document.getElementById("text-field");
console.log(field.value);

field.addEventListener("change", function () {
  sessionStorage.setItem("field", field.value);
});

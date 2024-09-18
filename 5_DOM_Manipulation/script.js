// Get the form element
const form = document.getElementById("student-form");

// Validate input fields
form.name.addEventListener("input", () => {
  const name = form.name.value;
  if (!/^[a-zA-Z ]{1,12}$/.test(name)) {
    alert("Invalid name. Must be between 1 and 12 characters, and only contain letters and spaces.");
  }
});

form.studentID.addEventListener("input", () => {
  const studentID = form.studentID.value;
  if (!/^[a-zA-Z0-9]{1,10}$/.test(studentID)) {
    alert("Invalid student ID. Must be between 1 and 10 characters, and can contain letters and numbers.");
  }
});

form.email.addEventListener("input", () => {
  const email = form.email.value;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address. Please enter a valid email address.");
  }
});

form.contactNo.addEventListener("input", () => {
  const contactNo = form.contactNo.value;
  const contactNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!contactNoRegex.test(contactNo)) {
    alert("Invalid contact number. Please enter a valid contact number.");
  }
});

// Validate on register button click
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  const name = form.name.value;
  const studentID = form.studentID.value;
  const email = form.email.value;
  const contactNo = form.contactNo.value;

  if (!name || !studentID || !email || !contactNo) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/^[a-zA-Z ]{1,12}$/.test(name)) {
    alert("Invalid name. Must be between 1 and 12 characters, and only contain letters and spaces.");
    return;
  }

  if (!/^[a-zA-Z0-9]{1,10}$/.test(studentID)) {
    alert("Invalid student ID. Must be between 1 and 10 characters, and can contain letters and numbers.");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address. Please enter a valid email address.");
    return;
  }

  const contactNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!contactNoRegex.test(contactNo)) {
    alert("Invalid contact number. Please enter a valid contact number.");
    return;
  }

  // If all validations pass, add the student record to the table
  const studentTable = document.getElementById("student-table");
  const newRow = studentTable.insertRow(-1);
  const cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4)
  ];

  cells[0].innerHTML = name;
  cells[1].innerHTML = studentID;
  cells[2].innerHTML = email;
  cells[3].innerHTML = contactNo;
  cells[4].innerHTML = "<button class='delete-btn'>Delete</button>";

  // Clear the form fields
  form.name.value = "";
  form.studentID.value = "";
  form.email.value = "";
  form.contactNo.value = "";

  // Add event listener to delete button
  const deleteBtn = cells[4].querySelector("button");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });
});
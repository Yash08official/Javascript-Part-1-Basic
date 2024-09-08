// script.js
// Get the form and display section elements
const form = document.getElementById("student-form");
const displaySection = document.getElementById("student-records");
const studentTable = document.getElementById("student-table");
const studentData = document.getElementById("student-data");

// Initialize an empty array to store student records
let studentRecords = [];

// Function to add a new student record
function addStudentRecord(student) {
  studentRecords.push(student);
  displayStudentRecords();
  localStorage.setItem("studentRecords", JSON.stringify(studentRecords));
}

// Function to display student records
function displayStudentRecords() {
  studentData.innerHTML = "";
  studentRecords.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.studentID}</td>
      <td>${student.email}</td>
      <td>${student.contactNo}</td>
      <td>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    studentData.appendChild(row);
  });
}

// Function to edit a student record
function editStudentRecord(index) {
  const student = studentRecords[index];
  form.name.value = student.name;
  form.studentID.value = student.studentID;
  form.email.value = student.email;
  form.contactNo.value = student.contactNo;
  document.getElementById("submit-btn").innerHTML = "Update";
}

// Function to delete a student record
function deleteStudentRecord(index) {
  studentRecords.splice(index, 1);
  displayStudentRecords();
  localStorage.setItem("studentRecords", JSON.stringify(studentRecords));
}

// Add event listeners to the form and buttons
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const student = {
    name: form.name.value,
    studentID: form.studentID.value,
    email: form.email.value,
    contactNo: form.contactNo.value,
  };
  addStudentRecord(student);
  form.reset();
});

studentTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const index = e.target.dataset.index;
    editStudentRecord(index);
  } else if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    deleteStudentRecord(index);
  }
});

// Load student records from local storage
const storedRecords = localStorage.getItem("studentRecords");
if (storedRecords) {
  studentRecords = JSON.parse(storedRecords);
  displayStudentRecords();
}

// Validate input fields
form.name.addEventListener("input", () => {
  const name = form.name.value;
  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("Invalid name. Only characters and spaces are allowed.");
  }
});

form.studentID.addEventListener("input", () => {
  const studentID = form.studentID.value;
  if (!/^\d+$/.test(studentID)) {
    alert("Invalid student ID. Only numbers are allowed.");
  }
});

form.email.addEventListener("input", () => {
  const email = form.email.value;
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Invalid email address.");
  }
});

form.contactNo.addEventListener("input", () => {
  const contactNo = form.contactNo.value;
  if (!/^\d+$/.test(contactNo)) {
    alert("Invalid contact number. Only numbers are allowed.");
  }
});

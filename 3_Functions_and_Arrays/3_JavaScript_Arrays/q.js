let flag = true;

function toggleColor() {
  if (flag) {
    id.style.backgroundColor = "blue";
    flag = false;
  } else {
    id.style.backgroundColor = "red";
    flag = true;
  }
  setTimeout(toggleColor, 500);
}

toggleColor();
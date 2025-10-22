const buttons = document.querySelectorAll(".sub-container");

const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id == "yellow-color") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id == "blue-color") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id == "green-color") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id == "red-color") {
      body.style.backgroundColor = "red";
    }
  });
});

const button = document.createElement("button");
button.textContent = "Click to me";
button.style.backgroundColor = "#4CAF50";
button.style.border = "none";
button.style.padding = "15px 32px";
button.style.textAlign = "center";
button.style.textDecoration = "none";
button.style.fontSize = "22px";
button.style.margin = "4px 2px";
button.style.cursor = "pointer";
button.style.borderRadius = "10px";

const elemBody = document.querySelector("body");
elemBody.appendChild(button);

let initialColor = button.style.color;
let initialBackgroundColor = button.style.backgroundColor;

function changeColor() {
  if (
    button.style.color === initialColor &&
    button.style.backgroundColor === initialBackgroundColor
  ) {
    button.style.color = "red";
    button.style.backgroundColor = "blue";
  } else {
    button.style.color = initialColor;
    button.style.backgroundColor = initialBackgroundColor;
  }
}

button.onclick = function () {
  changeColor();
};

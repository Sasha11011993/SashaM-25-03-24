"use strict";

const img = document.querySelectorAll(".img-slider");
const point = document.querySelectorAll(".point-slider");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

point[0].classList.add("activeImg");
img[0].classList.add("activeImg");

let counter = 0;

for (let i = 0; i < point.length; i++) {
  point[i].addEventListener("click", () => {
    for (let j = 0; j < point.length; j++) {
      point[j].classList.remove("activeImg");
      img[j].classList.remove("activeImg");
    }

    counter = i;
    point[counter].classList.add("activeImg");
    img[counter].classList.add("activeImg");

    hideButton();
  });
}

btnLeft.addEventListener("click", () => {
  for (let j = 0; j < point.length; j++) {
    point[j].classList.remove("activeImg");
    img[j].classList.remove("activeImg");
  }
  counter--;

  img[counter].classList.add("activeImg");
  point[counter].classList.add("activeImg");

  hideButton();
});

btnRight.addEventListener("click", () => {
  for (let j = 0; j < point.length; j++) {
    point[j].classList.remove("activeImg");
    img[j].classList.remove("activeImg");
  }
  counter++;

  img[counter].classList.add("activeImg");
  point[counter].classList.add("activeImg");

  hideButton();
});

function hideButton() {
  if (counter === 0) {
    btnLeft.style.display = "none";
  } else {
    btnLeft.style.display = "flex";
  }

  if (counter === img.length - 1) {
    btnRight.style.display = "none";
  } else {
    btnRight.style.display = "flex";
  }
}

hideButton();

const imgContainer = document.createElement("div");
imgContainer.classList.add("random-image");
const elemBody = document.querySelector("body");
elemBody.appendChild(imgContainer);

const imageSources = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
];

const randomIndex = Math.floor(Math.random() * imageSources.length);

const randomImagePath = imageSources[randomIndex];

const randomImg = document.createElement("img");
randomImg.src = randomImagePath;

imgContainer.appendChild(randomImg);

// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const buttonLink = document.querySelector("#link");
const buttonSend = document.querySelector("#send");

let message;

buttonLink.addEventListener("click", () => {
  message = prompt("Введіть адресу Url");
});

buttonSend.addEventListener("click", () => {
  if (isValidUrl(message)) {
    window.open(message, "_blank");
    // window.location.href = message;
  } else {
    alert("Введіть справжню адресу Url");
  }
});

function isValidUrl(url) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  return urlPattern.test(url);
}

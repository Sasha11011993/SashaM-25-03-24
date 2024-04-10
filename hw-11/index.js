const number = parseInt(prompt("Привіт, введіть довільне число N: "));

let message = "";
if (isNaN(number)) {
  alert("Нажаль це не число");
} else {
  for (let i = 1; i <= 100; i++) {
    if (i * i <= number) {
      message += i + " ";
    }
  }
}

alert(message);

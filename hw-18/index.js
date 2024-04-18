function printChoice() {
  let userMessage;
  let iteration = 0;

  for (let i = 0; i < 10; i++) {
    userMessage = prompt("Введіть число більше 100:");
    iteration++;
    if (iteration === 10) {
      console.log("Досягнуто максимальну кількість ітерацій.");
    }

    if (userMessage === null || userMessage === "" || isNaN(userMessage)) {
      console.log("Ви нічого не ввели або ввели не число.");
      break;
    } else if (userMessage > 100) {
      console.log("Ви ввели число:", userMessage);
      break;
    } else {
      console.log("Ви ввели число менше 100. Спробуйте ще раз.");
    }
  }
}

printChoice();

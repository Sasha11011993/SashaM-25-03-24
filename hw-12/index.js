const number = parseInt(prompt("Введіть просте число"));

if (isNaN(number)) {
  alert("Це не число (-_-)");
} else {
  if (number <= 1) {
    alert(`${number} - не є простим числом.`);
  } else {
    let primeN = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        primeN = false;
        break;
      }
    }
    if (primeN) {
      alert(`${number} - просте число.`);
    } else {
      alert(`${number} - не є простим числом.`);
    }
  }
}

// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.

class Calculator {
  add(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  subtract(...numbers) {
    return numbers.reduce((total, num) => total - num);
  }

  multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
  }

  divide(x, ...numbers) {
    if (numbers.includes(0)) {
      throw new Error("Ділення на нуль неможливе");
    }
    return numbers.reduce((total, num) => total / num, x);
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3, 2)); // 10
console.log(calc.subtract(20, 4, 3)); // 13
console.log(calc.multiply(3, 6, 2)); // 36
console.log(calc.divide(48, 2, 2)); // 12

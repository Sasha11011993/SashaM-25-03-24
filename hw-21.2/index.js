// ## Отримання парних чисел з масиву

// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
  // youre awesome code here
  let evenNumbers = arr.filter(function (elem) {
    return elem % 2 === 0;
  });
  return evenNumbers;
}

const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]

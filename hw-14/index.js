const array = [{}, 1, 2, 3, 4, 5, 6, "string", null];

function foo(array) {
  let sum = 0;
  let counter = 0;

  array.forEach((numb) => {
    if (typeof numb === "number" && !isNaN(numb)) {
      sum += numb;
      counter++;
    }
  });

  if (counter === 0) {
    return "Немає чисел";
  }
  return sum / counter;
}

const result = foo(array);

console.log(result);

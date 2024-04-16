function sum() {
  let total = 0;

  return function (number) {
    total += number;
    return total;
  };
}

const totalSum = sum();

console.log(totalSum(4)); // 4

console.log(totalSum(6)); // 10

console.log(totalSum(10)); // 20

console.log(totalSum(7)); // 27

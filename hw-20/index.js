const company = {
  sales: [
    { name: "Jhon", salary: 1000 },
    { name: "Alice", salary: 600 },
    { name: "Bob", salary: 1200 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
      { name: "Max", salary: 600 },
    ],

    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function totalSales(company) {
  let total = 0;

  function calculateTotal(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employee) => {
          total += employee.salary;
        });
      } else {
        calculateTotal(obj[key]);
      }
    }
  }

  calculateTotal(company);

  return total;
}

const total = totalSales(company);
console.log(total);

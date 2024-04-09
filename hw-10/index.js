const usd = 39;
const euro = 42;
const franc = 43;

const currency = prompt(
  "Привіт, в якій валюті зробити розрахунок: Долар, Євро, Франк ?"
).toLowerCase();

if (currency === "долар" || currency === "євро" || currency === "франк") {
  let course;
  switch (currency) {
    case "долар":
      course = usd;
      break;
    case "євро":
      course = euro;
      break;
    case "франк":
      course = franc;
      break;
  }
  for (let i = 10; i <= 100; i += 10) {
    let uah = i * course;
    console.log(`${i} ${currency} коштує ${uah} гривні`);
  }
} else {
  alert("Немає такої валюти");
}

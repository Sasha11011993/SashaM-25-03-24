const string = prompt("Привіт, введи рядок");
const symbol = prompt("Напиши які потрібно видалити букви");

function deleteSymbol(string, symbol) {
  symbol.split("").forEach(function (symbol) {
    string = string.replaceAll(symbol, "");
  });
  return string;
}

const result = deleteSymbol(string, symbol);
alert(result);

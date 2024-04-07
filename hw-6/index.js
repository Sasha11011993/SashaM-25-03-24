alert("Привіт");
const age = prompt("Вкажи свій рік народження");
const city = prompt("В якомі місті ти проживаєш?");
const sport = prompt("Який твій улюблений вид спорту?");

let ageMessage;
if (age === null) {
  ageMessage = "Шкода, що Ви не захотіли ввести свою дату народжння";
} else {
  ageMessage = "Твій вік" + age + " ";
}

let cityMessage;
if (city === "київ" || city === "Київ") {
  cityMessage = "Ти живеш у столиці України";
} else if (city === "вашингтон" || city === "Вашингтон") {
  cityMessage = "Ти живеш у столиці США";
} else if (city === "лондон" || city === "Лондон") {
  cityMessage = "Ти живеш у столиці Англії";
} else if (city === null) {
  cityMessage = "Шкода, що Ви не захотіли ввести своє місто";
} else {
  cityMessage =
    "Ти живеш у місті " + city.charAt(0).toUpperCase() + city.slice(1) + " ";
}

let sportMessage;
switch (sport) {
  case "футбол":
    sportMessage = "Круто! Хочеш стати як Андрій Шевченко ?";
    break;
  case "баскетбол":
    sportMessage = "Круто! Хочеш стати як  Майкл Джордан ?";
    break;
  case "бокс":
    sportMessage = "Круто! Хочеш стати як  Кличко ?";
    break;
  default:
    {
      if (sport === null) {
        sportMessage =
          "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
      } else {
        sportMessage = "Твій улюблений вид спорту " + sport + " ";
      }
    }
    break;
}

alert(`${ageMessage}, ${cityMessage}, ${sportMessage}`);

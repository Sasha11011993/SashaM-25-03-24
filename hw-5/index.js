const number = prompt("Привіт, введи три довільних цифри");
const space = number.toString().split("").map(Number);

if (space[0] === space[1] || space[1] === space[2] || space[0] === space[2]) {
  alert("є однакові");
  console.log("є однакові");
} else {
  alert("Щось не так");
  console.log("Щось не так");
}

if (space[0] === space[1] && space[1] === space[2]) {
  alert("всі однакові");
} else {
  alert("не всі однакові");
}

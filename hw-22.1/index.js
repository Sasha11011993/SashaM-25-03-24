const elemBodyHTML = document.querySelector("body");

function tablePifagor(size) {
  let tableHTML = "<table>";

  tableHTML += "<tr><th></th>";
  for (let j = 1; j <= size; j++) {
    tableHTML += `<th>${j}</th>`;
  }
  tableHTML += "</tr>";

  for (let i = 1; i <= size; i++) {
    tableHTML += "<tr>";

    tableHTML += `<th>${i}</th>`;
    for (let j = 1; j <= size; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  return tableHTML;
}

const pifagorTableHTML = tablePifagor(10);
console.log(pifagorTableHTML);
elemBodyHTML.innerHTML = `<div>${pifagorTableHTML}</div>`;

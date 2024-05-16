const list = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");
const li = document.createElement("li");
const p = document.createElement("p");
const btnCont = document.createElement("div");
const btnDelete = document.createElement("button");
btnDelete.textContent = "Delete";
const btnChange = document.createElement("button");
btnChange.textContent = "Change";
const changeInput = document.createElement("input");
const changeCont = document.createElement("div");
const btnAdd = document.createElement("button");
btnAdd.textContent = "Add";
const btnNo = document.createElement("button");
btnNo.textContent = "No";

function createListItem() {
  p.textContent = input.value;
  list.appendChild(li);
  li.appendChild(p);
  li.appendChild(btnCont);
  btnCont.appendChild(btnChange);
  btnCont.appendChild(btnDelete);

  input.value = "";
}

function deleteListItem() {
  btnDelete.addEventListener("click", () => {
    list.removeChild(li);
  });
}

function changeListItem() {
  btnChange.addEventListener("click", () => {
    changeCont.appendChild(btnNo);
    changeCont.appendChild(btnAdd);

    li.replaceChild(changeCont, btnCont);
    li.appendChild(changeInput);
  });
}

button.addEventListener("click", () => {
  createListItem();
  deleteListItem();
  changeListItem();
});

const list = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

function createListItem() {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const btnCont = document.createElement("div");
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  const btnChange = document.createElement("button");
  btnChange.textContent = "Change";
  p.textContent = input.value;
  list.appendChild(li);
  li.appendChild(p);
  li.appendChild(btnCont);
  btnCont.appendChild(btnChange);
  btnCont.appendChild(btnDelete);

  input.value = "";

  deleteListItem(li, btnDelete);
  changeListItem(li, btnCont, btnChange);
}

function deleteListItem(li, btnDelete) {
  btnDelete.addEventListener("click", () => {
    list.removeChild(li);
  });
}

function changeListItem(li, btnCont, btnChange) {
  btnChange.addEventListener("click", () => {
    const changeInput = document.createElement("input");
    const changeCont = document.createElement("div");
    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Add";
    const btnNo = document.createElement("button");
    btnNo.textContent = "No";
    changeCont.appendChild(btnNo);
    changeCont.appendChild(btnAdd);

    li.replaceChild(changeCont, btnCont);
    li.appendChild(changeInput);

    btnAdd.addEventListener("click", () => {
      li.removeChild(changeCont);
      li.removeChild(changeInput);
    });
  });
}

button.addEventListener("click", () => {
  createListItem();
});

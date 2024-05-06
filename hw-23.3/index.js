const list = document.querySelector("#todo-list");
const input = document.querySelector("#todo-input-container input");
const button = document.querySelector("#todo-input-container button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.id = "todo-li";

  const p = document.createElement("p");
  p.id = "par";

  const btnDelete = document.createElement("button");
  btnDelete.id = "btnDelete";
  btnDelete.textContent = "Delete";

  p.innerText = input.value;

  list.appendChild(li);
  li.appendChild(p);
  li.appendChild(btnDelete);

  input.value = "";

  btnDelete.addEventListener("click", () => {
    list.removeChild(li);
  });
});

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.id = "todo-li";
//   const divCreate = document.createElement("div");
//   divCreate.id = "li-div";
//   const btnChange = document.createElement("button");
//   btnChange.id = "btnChange";
//   btnChange.textContent = "Change";
//   const btnDelete = document.createElement("button");
//   btnDelete.id = "btnDelete";
//   btnDelete.textContent = "Delete";
//   li.textContent = input.value;
//   list.appendChild(li);//
//   li.appendChild(divCreate);

//   divCreate.appendChild(btnChange);
//   divCreate.appendChild(btnDelete);
//   input.value = "";

//   btnDelete.addEventListener("click", () => {
//     list.removeChild(li);
//   });

//   btnChange.addEventListener("click", () => {
//     const divChange = document.createElement("div");
//     divChange.id = "btnChange-div";
//     const changeInput = document.createElement("input");
//     changeInput.id = "changeInput";
//     changeInput.placeholder = "Введіть нове завдання";
//     const btnSave = document.createElement("button");
//     btnSave.id = "btnSave";
//     btnSave.textContent = "Save";
//     const btnNo = document.createElement("button");
//     btnNo.id = "btnNo";
//     btnNo.textContent = "No";

//     divChange.appendChild(changeInput);
//     divChange.appendChild(btnSave);
//     divChange.appendChild(btnNo);
//     li.appendChild(divChange);
//     li.removeChild(divCreate);

//     btnSave.addEventListener("click", () => {
//       li.innerText = changeInput.value;
//       li.appendChild(divCreate);
//     });

//     btnNo.addEventListener("click", () => {
//       li.removeChild(divChange);
//       li.appendChild(divCreate);
//     });
//   });
// });

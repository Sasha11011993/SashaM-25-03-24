const input = document.querySelector("input");
const btnAdd = document.querySelector(".form__btn");
const list = document.querySelector(".js--todos-wrapper");

btnAdd.addEventListener("click", addTask);

getTasks();

function addTask() {
  const task = input.value.trim();

  if (task) {
    createTask(task);
    input.value = "";
    savedTasks();
  }
}

function createTask(inputValue) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = `<input type="checkbox" />
          <span class="todo-item__description">${inputValue}</span>
          <button class="todo-item__delete">Видалити</button>`;
  list.insertAdjacentElement("beforeend", li);

  const liCheckbox = li.querySelector('input[type="checkbox"]');
  liCheckbox.addEventListener("change", () => {
    if (liCheckbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  const liBtnDelete = li.querySelector(".todo-item__delete");
  liBtnDelete.addEventListener("click", () => {
    list.removeChild(li);
    savedTasks();
  });
}

function savedTasks() {
  let tasks = [];
  list.querySelectorAll("li .todo-item__description").forEach((item) => {
    tasks.push(item.textContent.trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTask);
}

window.addEventListener("storage", (e) => {
  if (e.key === "tasks") {
    list.innerHTML = "";
    getTasks();
  }
});

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

function createTask(inputValue, isCompleted) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  const descriptionSpan = document.createElement("span");
  descriptionSpan.classList.add("todo-item__description");
  descriptionSpan.textContent = inputValue;
  li.appendChild(descriptionSpan);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("todo-item__delete");
  deleteButton.textContent = "Видалити";
  li.appendChild(deleteButton);

  if (isCompleted) {
    li.classList.add("completed");
    checkbox.checked = true;
  }

  list.insertAdjacentElement("beforeend", li);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    savedTasks();
  });

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    savedTasks();
  });
}

function savedTasks() {
  let tasks = [];
  list.querySelectorAll("li").forEach((item) => {
    const task = {
      description: item
        .querySelector(".todo-item__description")
        .textContent.trim(),
      completed: item.classList.contains("completed"),
      checkboxState: item.querySelector('input[type="checkbox"]').checked,
    };
    tasks.push(task);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (list.children.length === 0) {
    tasks.forEach((task) => {
      createTask(task.description, task.completed);
    });
  }
}

window.addEventListener("DOMContentLoaded", getTasks);

window.addEventListener("storage", (e) => {
  if (e.key === "tasks") {
    list.innerHTML = "";
    getTasks();
  }
});

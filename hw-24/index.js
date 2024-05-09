const form = document.querySelector("form");
const nameInput = document.querySelector("#example-name");
const nameRegex = /^.+$/;
const messageInput = document.querySelector("#example-message");
const messageRegex = /^.{5,}$/;
const phoneNumberInput = document.querySelector("#example-phone");
const phoneNumberRegex = /^\+380\d{9}$/;
const emailInput = document.querySelector("#example-email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputName = document.querySelector(".input-name");
const nameInputError = "Будь ласка, введіть своє ім'я!";
const messageInputError = "Повідомлення має містити не менше 5 символів!";
const phoneNumberInputError =
  "Введіть обов'язкове поле Phone number, що починається з +380 та має 9 цифр!";
const emailInputError =
  "Введіть обов'язкове поле Email, яке містить символи @ та крапку!";

function createError(className, errorText, inputBorder) {
  const inputName = document.querySelector(className);
  const errorName = document.createElement("p");
  errorName.textContent = errorText;
  inputName.appendChild(errorName);
  inputBorder.className = "error";
}

function deleteError(className, inputBorder) {
  const inputName = document.querySelector(className);
  const errorName = inputName.querySelector("p");
  if (errorName) {
    inputName.removeChild(errorName);
    inputBorder.className = "";
  }
}

function validateForm() {
  if (!nameRegex.test(nameInput.value)) {
    createError(".input-name", nameInputError, nameInput);
  } else {
    deleteError(".input-name", nameInput);
  }

  if (!messageRegex.test(messageInput.value)) {
    createError(".input-message", messageInputError, messageInput);
  } else {
    deleteError(".input-message", messageInput);
  }

  if (
    phoneNumberInput.value.trim() === "" ||
    !phoneNumberRegex.test(phoneNumberInput.value)
  ) {
    createError(".input-phone", phoneNumberInputError, phoneNumberInput);
  } else {
    deleteError(".input-phone", phoneNumberInput);
  }

  if (emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
    createError(".input-email", emailInputError, emailInput);
  } else {
    deleteError(".input-email", emailInput);
  }
}

function checkingValueField(e) {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const email = emailInput.value.trim();

  if (
    name === "" ||
    message === "" ||
    phoneNumber === "" ||
    email === "" ||
    !phoneNumberRegex.test(phoneNumber) ||
    !emailRegex.test(email)
  ) {
    e.preventDefault();
    return;
  }

  console.log("Ім'я:", name);
  console.log("Email:", email);
  console.log("Номер телефону:", phoneNumber);
  console.log("Повідомлення:", message);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
  checkingValueField();

  form.reset();
});

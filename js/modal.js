// Форма отправки
let buttonContacts = document.querySelector(".button-contacts");
let modal = document.querySelector(".modal");
let buttonExit = document.querySelectorAll(".button-exit");
// Карта
let buttonMap = document.querySelector(".button-map");
let modalMap = document.querySelector(".modal-map");

buttonContacts.onclick = function () {
  modal.classList.add("shown");
};

buttonMap.onclick = function () {
  modalMap.classList.add("shown");
};

for (let buttonsExit of buttonExit) {
  buttonsExit.onclick = function () {
    modal.classList.remove("shown");
    modalMap.classList.remove("shown");
  };
}

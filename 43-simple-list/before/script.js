// Select all elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");
// When form is submitted, add a new element

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!input.value) return;
  const newToDoText = input.value;
  const newListItem = document.createElement("div");
  newListItem.innerText = newToDoText;
  newListItem.classList.add("list-item");
  list.appendChild(newListItem);
  input.value = "";
  newListItem.addEventListener("click", event => {
    list.removeChild(newListItem);
  });
});

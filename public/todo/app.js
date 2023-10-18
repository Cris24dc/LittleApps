const addButton = document.querySelector(".plus-button");
const todo = document.querySelector(".todo-con");
const done = document.querySelector(".done-con");
const formAdd = document.querySelector(".add-form");

addButton.addEventListener("click", function () {
  const newListItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const labelItem = document.createElement("label");
  const trash = document.createElement("button");
  const trashImg = document.createElement("img");
  trashImg.src = "./img/trash.png";
  checkbox.type = "checkbox";
  checkbox.id = "item";
  checkbox.addEventListener("click", checkboxAdd);
  trash.addEventListener("click", removeTrash);
  labelItem.htmlFor = "item";
  labelItem.textContent = formAdd.value;
  trash.classList.add("trash-button");
  trashImg.classList.add("trash-img");
  newListItem.appendChild(checkbox);
  newListItem.appendChild(labelItem);
  newListItem.appendChild(trash);
  trash.appendChild(trashImg);
  todo.appendChild(newListItem);
  formAdd.value = "";
});

formAdd.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const newListItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const labelItem = document.createElement("label");
    const trash = document.createElement("button");
    const trashImg = document.createElement("img");
    trashImg.src = "./img/trash.png";
    checkbox.type = "checkbox";
    checkbox.id = "item";
    checkbox.addEventListener("click", checkboxAdd);
    trash.addEventListener("click", removeTrash);
    labelItem.htmlFor = "item";
    labelItem.textContent = formAdd.value;
    trash.classList.add("trash-button");
    trashImg.classList.add("trash-img");
    newListItem.appendChild(checkbox);
    newListItem.appendChild(labelItem);
    newListItem.appendChild(trash);
    trash.appendChild(trashImg);
    todo.appendChild(newListItem);
    formAdd.value = "";
  }
});

function checkboxAdd() {
  if (this.checked) {
    this.nextElementSibling.classList.add("taiat");
    this.nextElementSibling.nextElementSibling.firstChild.src =
      "./img/trashgray.png";
    done.appendChild(this.parentElement);
  } else {
    this.nextElementSibling.classList.remove("taiat");
    this.nextElementSibling.nextElementSibling.firstChild.src =
      "./img/trash.png";
    todo.appendChild(this.parentElement);
  }
}

function removeTrash() {
  this.parentElement.remove();
}

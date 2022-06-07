const todosContainer = document.querySelector("ul");
const submit = document.querySelector("form");
const textInput = document.querySelector("#textInput");
const addAtodo = document.querySelector("#addAtodo");

submit.addEventListener("submit", (e) => {
  if (textInput.value === "") {
    e.preventDefault();
    textInput.setCustomValidity("Plz add a Todo!");
  } else {
    e.preventDefault();
    addAtodo.textContent = "";

    let list = document.createElement("li");
    let text = document.createTextNode(textInput.value);
    let span = document.createElement("span");
    let deleteCheckboxContainer = document.createElement("span");
    span.appendChild(text);
    const DeleteButton = document.createElement("button");
    list.appendChild(span);
    DeleteButton.innerHTML = "X";
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    deleteCheckboxContainer.appendChild(checkbox);
    deleteCheckboxContainer.appendChild(DeleteButton);
    list.appendChild(deleteCheckboxContainer);
    todosContainer.appendChild(list);
    list.classList.add("lis");
    span.classList.add("spanStyle");
    deleteCheckboxContainer.classList.add("deleteCheckboxContainer");
    DeleteButton.classList.add("deleteButton");
    checkbox.classList.add("checkbox");
    DeleteButton.addEventListener("click", () => list.remove());
    checkbox.addEventListener("click", (e) => {
      const listText = list.innerHTML;
      let checkboxState = e.target.checked;
      if (checkboxState) {
        span.style.opacity = "0.5";
        span.style.textDecoration = "line-through";
      } else {
        span.style.opacity = "1";
        span.style.textDecoration = "none";
      }
    });
    textInput.value = "";
  }
});

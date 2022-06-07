const todosContainer = document.querySelector("ul");
const submit = document.querySelector("#submit");
const textInput = document.querySelector("#textInput");

const listGenerator = (value) => {
  return `<li class=list>${value}<input type="checkbox"
    id=checked></li>`;
};

submit.addEventListener("click", () => {
  let list = document.createElement("li");
  let text = document.createTextNode(textInput.value);
  // let span = document.createElement("span");
  const DeleteButton = document.createElement("button");
  list.appendChild(text);
  DeleteButton.innerHTML = "delete";
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  list.appendChild(checkbox);
  const checked = document.querySelector("#checked");
  list.appendChild(DeleteButton);
  todosContainer.appendChild(list);
  DeleteButton.addEventListener("click", () => list.remove());

  checkbox.addEventListener("click", (e) => {
    const listText = list.innerHTML;
    let checkboxState = e.target.checked;
    if (checkboxState) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none";
    }
  });
  textInput.value = "";
});

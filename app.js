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
  const DeleteButton = document.createElement("button");
  const checkbox = `<input id="checked" type="checkbox">`;
  list.appendChild(text);
  DeleteButton.innerHTML = "delete";
  list.innerHTML += checkbox;
  list.appendChild(DeleteButton);
  todosContainer.appendChild(list);
  DeleteButton.addEventListener("click", () => list.remove());
  const checked = document.querySelector("#checked");
  console.log(checked);
  textInput.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  });
});

function createToDo(toDo) {
  console.log(toDo);
  let xButton = document.createElement("button");
  xButton.textContent = "x";
  xButton.addEventListener("click", handelDelete);

  let p = document.createElement("p");
  p.textContent = `${toDo}  `;

  p.appendChild(xButton);
  document.querySelector("#list").appendChild(p);
}

function handelDelete(e) {
  e.target.parentNode.remove();
}

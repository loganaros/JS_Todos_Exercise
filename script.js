const addForm = document.querySelector("form");
const input = addForm.querySelector("input").value;
const todoList = document.querySelector("ul");

addForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        let listItem = document.createElement("li");
        listItem.innerText = addForm.querySelector("input").value;
        let button = document.createElement("button");
        button.innerText = "DELETE";
        listItem.append(button);
        todoList.append(listItem);
    }
})
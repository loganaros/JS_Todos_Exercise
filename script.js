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
    localStorage.setItem("todoListInfo", JSON.stringify(todoList.innerHTML));
})

todoList.addEventListener("click", function(e) {
    let targetItem = e.target;
    if(targetItem.tagName === "BUTTON") {
        targetItem.parentElement.remove();
    } else if (targetItem.tagName === "LI") {
        targetItem.classList.toggle("done");
    }
    localStorage.setItem("todoListInfo", JSON.stringify(todoList.innerHTML));
})

document.addEventListener("DOMContentLoaded", function() {
    todoList.innerHTML = JSON.parse(localStorage.todoListInfo);
})
"use strict";

// Access elements.

const addTodoTextElem = document.querySelector(`input#add-todo-text`);
const addTodoButtonElem = document.querySelector(`button#add-todo-button`);
const todoListElem = document.querySelector(`ul#todo-list`);

// Add event listeners.

addTodoButtonElem.addEventListener("click", addTodoItem);

// Define event actions.

function addTodoItem(event) {
  const newTodoText = addTodoTextElem.value.trim();
  if (newTodoText.length === 0) {
    return;
  }
  const newTodoItemElem = document.createElement("li");
  newTodoItemElem.textContent = newTodoText;
  newTodoItemElem.addEventListener("click", removeTodoItem);;
  todoListElem.appendChild(newTodoItemElem);
}

function removeTodoItem(event) {
  const clickedTodoItem = event.target;
  const clickedParentElem = clickedTodoItem.parentNode;
  clickedParentElem.removeChild(clickedTodoItem);
}

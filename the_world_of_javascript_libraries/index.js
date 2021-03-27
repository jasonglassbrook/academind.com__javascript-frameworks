"use strict";

// Define data.

const todoList = [];

// Access elements.

const addTodoTextElem = document.querySelector(`input#add-todo-text`);
const addTodoButtonElem = document.querySelector(`button#add-todo-button`);
const todoListElem = document.querySelector(`ul#todo-list`);

// Add event listeners.

addTodoButtonElem.addEventListener("click", addTodo);

// Define event actions.

function addTodo(event) {
  // Get user input.
  const newTodoText = addTodoTextElem.value.trim();
  if (newTodoText.length === 0) {
    return;
  }
  // Create new todo item data and add it to todo list data.
  const newTodo = {
    id: uniqueId(),
    text: newTodoText,
  };
  // console.log(newTodo);
  todoList.push(newTodo);
  // console.log(todoList);
  // Create new todo item element and add it to todo list element.
  const newTodoElem = document.createElement("li");
  newTodoElem.textContent = newTodo.text;
  newTodoElem.dataset.id = newTodo.id;
  newTodoElem.addEventListener("click", removeTodo);
  todoListElem.appendChild(newTodoElem);
}

function removeTodo(event) {
  // Get todo item.
  const clickedTodoElem = event.target;
  const clickedTodoId = clickedTodoElem.dataset.id;
  const clickedParentElem = clickedTodoElem.parentNode;
  // Remove todo item from todo list data and element.
  const clickedTodoIndex = todoList.findIndex(
    (item) => item.id === clickedTodoId
  );
  // console.log(clickedTodoIndex);
  todoList.splice(clickedTodoIndex, 1);
  // console.log(todoList);
  clickedParentElem.removeChild(clickedTodoElem);
}

function uniqueId() {
  const timestamp = Date.now().toString();
  const randomDecimals = Math.random().toFixed(18).slice(1);
  return `${timestamp}${randomDecimals}`; /* this should be unique */
}

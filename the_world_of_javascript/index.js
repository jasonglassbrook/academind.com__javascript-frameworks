"use strict";

// Define data.

const todoList = [];

// Access elements.

const addTodoTextElem = document.querySelector(`input#add-todo-text`);
const addTodoButtonElem = document.querySelector(`button#add-todo-button`);
const todoListElem = document.querySelector(`ul#todo-list`);

// Add event listeners.

addTodoButtonElem.addEventListener("click", addTodoItem);

// Define event actions.

function addTodoItem(event) {
  // Get user input.
  const newTodoText = addTodoTextElem.value.trim();
  if (newTodoText.length === 0) {
    return;
  }
  // Create new todo item data and add it to todo list data.
  const newTodoItem = {
    id: uniqueId(),
    text: newTodoText,
  };
  // console.log(newTodoItem);
  todoList.push(newTodoItem);
  // console.log(todoList);
  // Create new todo item element and add it to todo list element.
  const newTodoItemElem = document.createElement("li");
  newTodoItemElem.textContent = newTodoItem.text;
  newTodoItemElem.dataset.id = newTodoItem.id;
  newTodoItemElem.addEventListener("click", removeTodoItem);
  todoListElem.appendChild(newTodoItemElem);
}

function removeTodoItem(event) {
  // Get todo item.
  const clickedTodoItemElem = event.target;
  const clickedTodoItemId = clickedTodoItemElem.dataset.id;
  const clickedParentElem = clickedTodoItemElem.parentNode;
  // Remove todo item from todo list data and element.
  const clickedTodoItemIndex = todoList.findIndex(
    (item) => item.id === clickedTodoItemId
  );
  // console.log(clickedTodoItemIndex);
  todoList.splice(clickedTodoItemIndex, 1);
  // console.log(todoList);
  clickedParentElem.removeChild(clickedTodoItemElem);
}

function uniqueId() {
  return Math.random().toString(); /* not truly unique, but it'll do for now */
}

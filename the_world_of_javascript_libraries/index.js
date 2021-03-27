"use strict";

// Define data.

const todoList = [];

// Access elements.

const addTodoTextElem = $(`input#add-todo-text`);
const addTodoButtonElem = $(`button#add-todo-button`);
const todoListElem = $(`ul#todo-list`);

// Add event listeners.

addTodoButtonElem.click(addTodo);

// Define event actions.

function addTodo(event) {
  // Get user input.
  const newTodoText = addTodoTextElem.val().trim();
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
  $(`<li>${newTodo.text}</li>`)
    .appendTo(todoListElem)
    .attr("dataset-id", newTodo.id)
    .click(removeTodo);
}

function removeTodo(event) {
  // Get todo item.
  const clickedTodoElem = $(this);
  const clickedTodoId = clickedTodoElem.attr("dataset-id");
  // Remove todo item from todo list data and element.
  const clickedTodoIndex = todoList.findIndex(
    (item) => item.id === clickedTodoId
  );
  // console.log(clickedTodoIndex);
  todoList.splice(clickedTodoIndex, 1);
  // console.log(todoList);
  clickedTodoElem.remove();
}

function uniqueId() {
  const timestamp = Date.now().toString();
  const randomDecimals = Math.random().toFixed(18).slice(1);
  return `${timestamp}${randomDecimals}`; /* this should be unique */
}

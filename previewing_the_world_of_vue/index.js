"use strict";

/***************************************
  Vue Config
***************************************/

new Vue({
  el: "#app",
  data: {
    todoList: [],
    newTodoText: "",
  },
  methods: {
    addTodo,
    removeTodo,
  },
});

/***************************************
  Event Handlers
***************************************/

function addTodo() {
  // Get user input.
  this.newTodoText = this.newTodoText.trim();
  if (this.newTodoText.length === 0) {
    return;
  }
  // Create new todo item data and add it to todo list data.
  const newTodo = {
    id: uniqueId(),
    text: this.newTodoText,
  };
  // console.log(newTodo);
  this.todoList.push(newTodo);
  // console.log(this.todoList);
}

function removeTodo(todo) {
  // Get todo item.
  const todoId = todo.id;
  // Remove todo item from todo list data and element.
  const todoIndex = this.todoList.findIndex((item) => item.id === todoId);
  // console.log(todoIndex);
  this.todoList.splice(todoIndex, 1);
  // console.log(this.todoList);
}

/***************************************
  Tools
***************************************/

function uniqueId() {
  const timestamp = Date.now().toString();
  const randomDecimals = Math.random().toFixed(18).slice(1);
  return `${timestamp}${randomDecimals}`; /* this should be unique */
}

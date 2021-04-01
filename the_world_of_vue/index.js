"use strict";

/***************************************
  Vue Config
***************************************/

const initialName = "Jason Glassbrook";

new Vue({
  el: "#app",
  data: {
    initialName,
    name: initialName,
  },
  methods: {
    changeName,
  },
});

/***************************************
  Event Handlers
***************************************/

function changeName() {
  this.name = reverseName(this.name);
}

function addElement() {}

/***************************************
  Tools
***************************************/

function reverseName(s) {
  return toTitleCase(reverseString(s));
}

function reverseString(s) {
  return s.split("").reverse().join("");
}

function toTitleCase(s) {
  return s.replace(/\w+/g, toUpperFirstCase);
}

function toUpperFirstCase(s) {
  return s.charAt(0).toLocaleUpperCase() + s.slice(1).toLocaleLowerCase();
}

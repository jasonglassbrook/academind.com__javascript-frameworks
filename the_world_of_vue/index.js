"use strict";

/***************************************
  Vue Config
***************************************/

const initial = {
  name: "Jason Glassbrook",
  itemList: [],
  itemCounter: 0,
};

Vue.component("app-greeter", {
  props: {
    username: {
      type: String,
      default: initial.name,
    },
  },
  methods: {
    firstWord,
    emitClickGreeter,
  },
  template: `<p v-on:click="emitClickGreeter">Hello, {{ firstWord(username) }}!</p>`,
});

new Vue({
  el: "#app",
  data: {
    initial,
    name: R.clone(initial.name),
    itemList: R.clone(initial.itemList),
    itemCounter: R.clone(initial.itemCounter),
  },
  methods: {
    changeName,
    addItem,
    removeItem,
    chooseItemColor,
    handleClickGreeter,
  },
});

/***************************************
  Event Handlers
***************************************/

function changeName() {
  this.name = reverseName(this.name);
}

function addItem() {
  this.itemCounter += 1;
  this.itemList.push(this.itemCounter);
}

function removeItem(item) {
  const itemIndex = this.itemList.indexOf(item);
  this.itemList.splice(itemIndex, 1);
}

function emitClickGreeter() {
  this.$emit("clickgreeter", this.username);
}

function handleClickGreeter(name) {
  alert(name);
}

/***************************************
  Tools
***************************************/

function firstWord(s) {
  return s.split(/\W+/g)[0];
}

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

function chooseItemColor(n) {
  return n % 2 == 0 ? "LightSkyBlue" : "LightCoral";
}

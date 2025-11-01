<script setup>
import { ref, reactive } from "vue";
let inputValue = ref("");
const arrTasks = reactive([]);
function addTask() {
  if (inputValue.value === "") return;
  arrTasks.push(inputValue.value);
  inputValue.value = "";
  console.log(arrTasks, Date.now());
}
</script>

<template>
  <h1>Список задач</h1>
  <input
    type="text"
    placeholder="Введите задачу, которую нужно сделать"
    v-model="inputValue"
    @keydown.ctrl.enter.exact="addTask"
    @keydown.enter.exact="addTask"
  />
  <button @click="addTask">Добавить</button>
  <ul>
    <li v-for="(task, index) in arrTasks" :key="index + task">{{ task }}</li>
  </ul>
</template>

<style>
input {
  width: 250px;
}
li {
  list-style: none;
}
</style>

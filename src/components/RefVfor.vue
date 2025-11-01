<template>
  <h2>Менеджер задачек</h2>
  <input type="text" placeholder="Введите задачу" ref="taskInput" />
  <button @click="addTask">Добавить задачу</button>
  <button @click="scrollToLastTask">к последней задаче</button>
  <button @click="deleteLastTask">удалить последнюю задачу</button>
  <ul>
    <li v-for="(task, index) in tasksList" :key="task + index" ref="task">
      {{ task }}
    </li>
  </ul>
</template>

<script setup>
import { reactive, useTemplateRef } from "vue";

const tasksList = reactive([]);
const taskInput = useTemplateRef("taskInput");
const taskItem = useTemplateRef("task");

function addTask() {
  tasksList.push(taskInput.value.value);
  taskInput.value.value = "";
  taskInput.value.focus();
}

function deleteLastTask() {
  if (tasksList.length > 0) tasksList.pop();
}

function scrollToLastTask() {
  taskItem.value[tasksList.length - 1].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

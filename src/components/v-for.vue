<script setup>
import { ref } from "vue";

let idItem = 4;
const arr = ref([
  { id: 1, text: "хлеб" },
  { id: 2, text: "молоко" },
  { id: 3, text: "сыр" },
]);

function addToArr() {
  arr.value.push({ id: idItem++, text: "" });
}
</script>

<template>
  <div>Список задач</div>
  <ul style="list-style-type: none">
    <li v-for="item in arr" :key="item.id"><input v-model="item.text" /></li>
  </ul>
  <button @click="addToArr">Добавить задачу</button>
</template>

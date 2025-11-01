<script setup>
import { ref, reactive } from "vue";

const bigObj = reactive([
  { id: 1, user: { name: undefined, age: 25 }, message: "Привет!" },
  { id: 2, user: { name: "Иван", age: 30 }, message: "Как дела?" },
  { id: 3, user: { name: "Ольга", age: 28 }, message: "Vue классный!" },
]);

function makeNormalName(name) {
  return name || "Olga";
}
</script>

<template>
  <p v-for="{ id, user: { name }, message } in bigObj" :key="id">
    {{ makeNormalName(name) }} : "{{ message }} "
  </p>
</template>

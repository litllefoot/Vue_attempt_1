<script setup>
import { ref, reactive, watch } from "vue";
const dataWords = reactive([
  "JavaScript",
  "Vue",
  "React",
  "Angular",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
  "Node.js",
  "Express",
  "База данных",
  "API",
  "Компонент",
  "Состояние",
  "Роутинг",
]);

const searchWord = ref("");
let selectedArr = ref([]);
let timerId = null;

watch(searchWord, (newSearch) => {
  if (searchWord.value === "" || searchWord.value.length < 3) return;
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    selectedArr.value = dataWords.filter((item) =>
      item.toLowerCase().includes(newSearch.toLowerCase())
    );
    timerId = null;
  }, 500);
});
</script>

<template>
  <input type="text" placeholder="Введите текст" v-model="searchWord" />
  <ul>
    <li v-for="(value, index) in selectedArr" :key="index + value">
      {{ value }}
    </li>
  </ul>
</template>

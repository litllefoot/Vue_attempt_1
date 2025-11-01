<script setup>
import { ref } from "vue";
const checkedName = ref([]);
const select = ref("");

const decorator = ref("пока текста нет");
</script>

<template>
  <div>Люди: {{ checkedName.join(", ") || "никто не выбран" }}</div>
  <label>
    Человек 1<input type="checkbox" value="Rufina" v-model="checkedName"
  /></label>
  <label>
    Человек 2<input type="checkbox" value="Almaz" v-model="checkedName"
  /></label>
  <div>Количество:{{ select }}</div>
  <select v-model="select">
    <option disabled value="" selected>Выберете вариант</option>
    <option value="1">один</option>
    <option value="2">два</option>
  </select>

  <div>Тут выводится текст: {{ decorator }}</div>
  <input type="text" v-model.lazy.trim.number="decorator" />
</template>

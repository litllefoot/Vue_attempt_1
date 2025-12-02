<script setup>
import FormRegistraton2 from "./FormRegistraton2.vue";
import { ref, provide } from "vue";
const showHints = ref(true);
const errorColor = ref(true);
provide("showHints", showHints);
provide("errorColor", errorColor);
</script>

<template>
  <h3>Форма регистрации</h3>
  <FormRegistraton2 />
  <label><input type="checkbox" v-model="showHints" />Подсказки</label>
  <label
    ><input type="checkbox" v-model="errorColor" />Проверка заполнения</label
  >
  <br />
</template>

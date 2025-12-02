<template>
  <div class="form-result">
    <h4>Расчет знака зодиака</h4>
    <p>Здравствуйте, {{ name }}!</p>
    <p>Ваша дата рождения {{ age }}</p>
  </div>
</template>

<script setup>
/* defineProps({
  name: {
    type: String,
    default: "Мистер (Мисс) Инкогнито",
    validator: (value) => value.length > 2,
  },
  age: { type: Number },
}); */
/* Определяем входные параметры и их тип, значение по умолчанию */

import { useInfo } from '@/composibles/useInfo';
const { name, age } = useInfo();
</script>

<style scoped>
h4 {
  margin: 0;
}
p {
  color: black;
}
.form-result {
  border: 3px solid black;
  width: 50vw;
  height: 20vh;
  padding: 10px;
}
</style>

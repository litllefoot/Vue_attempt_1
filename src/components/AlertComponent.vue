<template>
  <div class="container" v-show="isVisible">
    <div class="main-info" :style="{ backgroundColor: prop.color }">
      <h3 name="title"><slot name="title-slot">Неизвестная ошибка</slot></h3>
      <p name="message"><slot name="message-slot">Опаньки </slot></p>
    </div>
    <button @click="isVisible = !isVisible">Х</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isVisible = ref(true);

const prop = defineProps({ color: { type: String, default: "grey" } });
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 30vw;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}
button {
  width: 35px;
  aspect-ratio: 1;
}
p {
  color: black;
}
</style>

<template>
  <form action="" method="post">
    <label>Введите имя <input type="text" v-model="localName" /></label>
    <label>введите возраст <input type="number" v-model="localAge" /></label>
  </form>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
const props = defineProps({ name: { type: String }, age: { type: Number } }); //задали входные параметры

const localName = ref(props.name);
const localAge = ref(props.age);

const emit = defineEmits(["update:name", "update:age"]); // Объявляем какое событие родитель может определить

watch(localName, (value) => {
  emit("update:name", value);
}); // при каком событии родитель может определить

watch(localAge, (value) => {
  emit("update:age", value);
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 3px solid black;
  width: 50vw;
  height: 20vh;
  padding: 10px;
}
</style>

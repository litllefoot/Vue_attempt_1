<script setup>
import { ref, watch, onWatcherCleanup } from "vue";
let number = ref("");

watch(number, (newNumber) => {
  if (!newNumber) return;

  const controller = new AbortController();
  onWatcherCleanup(() => {
    controller.abort();
  });

  setTimeout(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${newNumber}`,
        { signal: controller.signal }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("ОТмена предыдущего запроса");
      } else {
        console.error(error);
      }
    }
  }, 2000);
});
</script>

<template>
  <input
    type="number"
    placeholder="введите число от 1 до 10"
    v-model="number"
  />
  <br />
</template>

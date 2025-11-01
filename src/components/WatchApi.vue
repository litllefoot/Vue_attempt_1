<script setup>
import { ref, watch, onWatcherCleanup } from "vue";
let number = ref("");

watch(number, (newNumber) => {
  if (!newNumber) return;
  const controller = new AbortController();

  setTimeout(() => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${newNumber}`, {
      signal: controller.signal,
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Ошибка сети");
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("предыдущий запрос был отменен");
        } else controller.error(error);
      });
  }, 2000);
  onWatcherCleanup(() => {
    controller.abort();
  });
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

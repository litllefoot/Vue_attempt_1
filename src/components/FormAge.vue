<template>
  <form action="" method="post">
    <label>Введите имя <input type="text" v-model="name" /></label>
    <label>введите возраст <input type="number" v-model="age" /></label>
  </form>
</template>

<script setup>
import { useInfo } from "@/composibles/useInfo";

const { name, age } = useInfo();
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

<script setup>
import { reactive } from "vue";
const students = reactive({
  1: { name: "Анна", faculty: "Математика", gpa: 4.5 },
  2: { name: "Иван", faculty: "Физика", gpa: 3.8 },
  3: { name: "Мария", faculty: "Информатика", gpa: 4.7 },
  4: { name: "Петр", faculty: "Математика", gpa: 3.9 },
  5: { name: "Ольга", faculty: "Информатика", gpa: 4.8 },
});
</script>

<template>
  <ul>
    Отличники (GPA > 4.0)
    <template
      v-for="({ name, faculty, gpa }, key) in students"
      :key="name + key"
    >
      <li v-if="gpa > 4">{{ name }} ( {{ faculty }}) - {{ gpa }}</li></template
    >
  </ul>
</template>

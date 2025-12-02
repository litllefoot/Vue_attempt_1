<template>
  <form action="" method="get">
    <h4>Личные данные</h4>
    <FormRegistraton3 :privateObject="privatInput"></FormRegistraton3>
  </form>

  <form action="" method="get">
    <h4>Контактная информация</h4>
    <FormRegistraton3 :privateObject="privatContact"></FormRegistraton3>
  </form>
</template>

<script setup>
import FormRegistraton3 from "./FormRegistraton3.vue";

const privatInput = [
  {
    type: "text",
    placeholder: "Имя",
    hint: "Имя должно состоять из минимум 2х букв",
  },
  { type: "text", placeholder: "Фамилия", hint: "Фамилия аналогично" },
];

const privatContact = [
  { type: "email", placeholder: "Почта", hint: "должно быть @ и точка" },
  {
    type: "tel",
    placeholder: "Телефон",
    hint: "должен начинаться с + и иметь 11 цифр",
  },
];
</script>

<template>
  <input type="text" v-model.trim.lazy="name" />
  <input type="number" v-model.number.lazy="age" />
</template>

<script setup>
const [name, modi] = defineModel("nameAndSurname", {
  default: "иван иванов",
  get(value) {
    if (modi.capitalize && typeof value === "string" && value.length) {
      value = value
        .split(" ")
        .map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        })
        .join(" ");
    }
    return value;
  },
  set(value) {
    if (modi.capitalize && typeof value === "string" && value.length) {
      value = value
        .split(" ")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ");
    }
    return value;
  },
});

const age = defineModel("vozrast", {
  default: 120,
  set(value) {
    if (value < 0 || value > 120) {
      value = 120;
    }
    return value;
  },
});
</script>

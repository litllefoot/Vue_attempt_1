<script setup>
import { ref } from "vue";
let event = ref("");
function greed() {
  console.log("hi");
}

const isActive = ref(true);
const hasError = ref(false);
</script>

<template>
  <select
    class="test"
    :class="{ active: isActive, red: hasError }"
    v-model="event"
  >
    <option disabled selected>выберете событие</option>
    <option value="click">click</option>
    <option value="keydown">keydown</option>
    <option value="mouseenter">mouseenter</option>
  </select>
  <input type="text" @[event].once="greed" />
</template>

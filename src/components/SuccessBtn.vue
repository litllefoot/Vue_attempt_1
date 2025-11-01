<script setup>
import { computed, ref } from "vue";
const count = ref(Math.round(Math.random() * 100));
const classBtn = computed(() => {
  switch (true) {
    case count.value < 33: {
      return "success";
    }
    case count.value > 66: {
      return "danger";
    }
    default: {
      return "warning";
    }
  }
});
</script>

<template>
  <button :class="classBtn">Сгенерировать состояние</button>
  <button :class="$attrs.class">$attrs</button>
</template>

<style>
.success {
  background: green;
}

.warning {
  background: yellow;
}

.danger {
  background: red;
}
</style>

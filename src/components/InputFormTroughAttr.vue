<template>
  <label>
    {{ label }}
    <input type="text" v-bind="$attrs" @focus="handleFocus" />
  </label>
</template>
<script setup>
import { useAttrs, defineEmits } from "vue";
const attrs = useAttrs();
console.log(attrs);
defineOptions({ inheritAttrs: false });
defineProps(["label"]);
const emit = defineEmits(["focus"]);

function handleFocus(event) {
  emit("focus", event);
}
</script>

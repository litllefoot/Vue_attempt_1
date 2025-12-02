<template>
  <div v-for="(obj, index) in privateObject" :key="index" class="inline">
    <input
      :type="obj.type"
      :placeholder="obj.placeholder"
      v-model="valueInput[index]"
      @blur="validation(index, obj.type)"
      :style="{ borderColor: helpColor && error[index] ? `red` : `` }"
    />
    <div v-if="helpMessage">{{ obj.hint }}</div>
  </div>
</template>

<script setup>
import { reactive, inject } from "vue";
const props = defineProps({
  privateObject: {
    type: Array,
    validator: (value) => value.length === 2,
    required: true,
  },
});

const helpMessage = inject("showHints");
const helpColor = inject("errorColor");

const valueInput = reactive({});
const error = reactive({});

props.privateObject.forEach((item, index) => {
  valueInput[index] = "";
  error[index] = "";
});

function validation(index, type) {
  const v = valueInput[index].trim();
  if (type === "text") {
    error[index] = v.length >= 2 ? "" : "Менее 2х символов";
  }
  if (type === "email") {
    error[index] = v.includes("@") ? "" : "Обычно почта включает @";
  }
  if (type === "tel") {
    error[index] = v.length >= 11 ? "" : "Укажите полный номер";
  }
  console.log("valueInput", valueInput);
  console.log("error", error);
}
</script>

<style>
.inline {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.inline div {
  color: green;
}
.inline input {
  margin-bottom: 5px;
}
</style>

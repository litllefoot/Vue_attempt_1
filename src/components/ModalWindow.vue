<template>
  <div class="modal-overlay" v-if="props.isModalOpened">
    <div class="modal-content">
      <button class="close-btn">X</button>
      <p>Ваш вес</p>
      <button class="confirm-btn" @click="onConfirmBtn">Подтверждаю</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["isModalOpened"]);

const emit = defineEmits(["closeX", "confirmBtn"]);

function onConfirmBtn() {
  emit("confirmBtn", "Подтверждено");
}
</script>

<style scoped>
* {
  color: black;
  user-select: none;
}

button {
  cursor: pointer;
}
.modal-overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(129, 127, 127, 0.7);
  display: grid;
  justify-content: center;
  align-content: center;
  position: fixed;
  z-index: 200;
  top: 0px;
}

.modal-content {
  width: 25vw;
  height: 25vh;
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 10px;
}
.close-btn {
  justify-self: end;
}

.confirm-btn {
  justify-self: center;
}
</style>

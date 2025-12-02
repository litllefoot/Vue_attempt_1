<template>
  <img
    :src="images[n - 1]"
    draggable="true"
    v-for="n in 3"
    :key="n"
    :ref="setupDraggable"
  />
  <div
    class="field"
    @dragover.prevent="dragOver"
    @drop="dropOnField"
    @dragleave="leaveField"
  ></div>
</template>

<script setup>
import { ref } from "vue";
import image1 from "/src/assets/sea/1.png";
import image2 from "/src/assets/sea/2.png";
import image3 from "/src/assets/sea/3.png";
const images = [image1, image2, image3];

const isFieldOver = ref(false);

const setupDraggable = (el) => {
  if (!el) return;
  el.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.src);
    document.documentElement.style.cursor = "grabbing";
  });

  el.addEventListener("dragend", (e) => {
    document.documentElement.style.cursor = "";
    if (isFieldOver.value === true) {
      e.target.setAttribute("draggable", "false");
      e.target.style.opacity = "0.5";
      isFieldOver.value = false;
    }
  });
};

const dropOnField = (e) => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", e.dataTransfer.getData("text"));
  e.target.appendChild(newImg);
  e.target.style.backgroundColor = "brown";
};

function dragOver(e) {
  e.target.style.backgroundColor = "green";
  isFieldOver.value = true;
}

function leaveField(e) {
  e.target.style.backgroundColor = "brown";
  isFieldOver.value = false;
}
</script>

<style>
body img:active {
  cursor: grabbing !important;
}
img {
  width: 150px;
  height: 50px;
  cursor: grab;
}

.field {
  background-color: brown;
  width: 450px;
  height: 150px;
  transition-duration: 0.2s;
}
</style>

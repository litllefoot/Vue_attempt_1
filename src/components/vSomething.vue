<template>
  <textarea
    placeholder="Пиши текст, а высота будет меняться автоматически"
    v-auto-resize:height.resize="50"
  ></textarea>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>

<script setup>
const vAutoResize = {
  mounted(el, binding) {
    const minHeight = binding.value || 0;
    const autoResize = binding.modifiers.resize;
    const prop = binding.arg === "height" ? "height" : null;

    if (prop) {
      el.style[prop] = minHeight + "px";
    }

    function resize() {
      el.style.height = minHeight + "px"; // сброс
      el.style.height = el.scrollHeight + "px"; // новая высота
    }

    if (autoResize) {
      el.addEventListener("input", resize);
    }

    // если есть начальное значение — сразу подгоняем
    resize();

    // сохраняем слушатель, чтобы убрать потом
    el._cleanup = () => el.removeEventListener("input", resize);
  },

  unmounted(el) {
    if (el._cleanup) el._cleanup();
  },
};
</script>

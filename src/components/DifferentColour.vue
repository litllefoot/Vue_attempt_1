<script setup>
import { ref, reactive } from "vue";
const rawHtmlRed = ref("<span style='color: red'>Красный текст</span>");
const title = reactive({ title: "test" });
</script>
<template>
  <div v-html="rawHtmlRed" :title="title.title"></div>
</template>

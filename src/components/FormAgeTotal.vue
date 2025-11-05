<template>
  <button @click="activeTab = 'FormAge'">Форма</button>
  <button @click="activeTab = 'FormZodiak'">Знак Зодиака</button>
  <KeepAlive>
    <component
      :is="components[activeTab]"
      v-model:name="name1"
      v-model:age="age1"
    ></component>
  </KeepAlive>
  <!-- activeTab это ключ у объекта -->
</template>

<script setup>
import { ref } from "vue";
import FormAge from "./FormAge.vue";
import FormZodiak from "./FormZodiak.vue";

const activeTab = ref("FormAge");
const components = {
  FormAge,
  FormZodiak,
}; // ключ и значения идентичны, можно указать просто ключ в таком случае

const name1 = ref("");
const age1 = ref("");
</script>

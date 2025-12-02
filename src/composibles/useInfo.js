import { ref } from "vue";
const name = ref("");
const age = ref("");

export function useInfo() {
  return { name, age };
}

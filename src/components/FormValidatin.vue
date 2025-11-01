<template>
  <form novalidate @submit.prevent="checkSubmitForm">
    <label
      >email
      <input
        type="email"
        v-model="form.email"
        ref="email"
        @blur="checkEmail"
        @keypress.enter.prevent="checkEmail"
    /></label>
    <label for=""
      >password
      <input
        type="password"
        v-model="form.password"
        ref="password"
        @blur="checkPassword"
        @keypress.enter.prevent="checkPassword"
    /></label>
    <p>{{ errors.email }} {{ errors.password }}</p>
    <button type="submit">Check and send</button>
  </form>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
const form = reactive({ email: "", password: "" });
const errors = reactive({ email: "", password: "" });

const email = ref(null);
const password = ref(null);
onMounted(() => {
  email.value.focus();
});

function checkPassword() {
  console.log("checkPassword called, password length:", form.password.length);
  if (form.password.length < 6) {
    errors.password = "пароль меньше 6 символов";
    return false;
  } else {
    errors.password = "";
    return true;
  }
}

function checkEmail() {
  console.log("checkEmail called, email:", form.email);
  if (form.email.includes("@")) {
    errors.email = "";
    return true;
  } else {
    errors.email = "почта не содержит символ @";
    return false;
  }
}

function checkSubmitForm() {
  console.log("checkSubmitForm called");
  const isValidEmail = checkEmail();
  const isValidPassword = checkPassword();
  console.log("Validation results:", isValidEmail, isValidPassword);
  if (isValidEmail && isValidPassword) {
    console.log("Форма отправлена");
  } else {
    console.log("Форма не отправлена");
  }
}
</script>

<style>
p {
  color: red;
}
</style>

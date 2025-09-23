<script setup>
import { ref, reactive, shallowRef } from "vue";
const title = ref("Здравствуйте!");
const dataColor = ref("red");

const rawHtml = ref(
  "<span style='color: green'>Зелёный текст через v-html</span>"
);
const inputAttributes = reactive({
  type: "number",
  placeholder: "введите число (v-bind аттрибуты input из reactive)",
});
const isVisible = ref(true);
const count = ref(0);
const shallowCount = shallowRef({ count: { count: 0 } });
const word = ref("Rufina");
const password = ref("");
const today = ref(new Date());
function greedToggle() {
  title.value === "Здравствуйте!"
    ? (title.value = "И снова здравствуйте")
    : (title.value = "Здравствуйте!");
}

function changeColorBtn() {
  dataColor.value === "red"
    ? (dataColor.value = "blue")
    : (dataColor.value = "red");
}

function upperCaseFunc(str) {
  return str.toUpperCase();
}

function currentTime(date) {
  return `Текущее время ${date.getHours()}:${date.getMinutes()}`;
}

function currentDateTitle(date) {
  return date.toLocaleDateString("ru-RU");
}

function turboFunc() {
  shallowCount.value.count.count++;
  console.log(shallowCount);
}

function turbo10Func() {
  shallowCount.value = { count: { count: 0.5 } };
}
</script>

<template>
  <h1 @click="greedToggle">{{ title }}</h1>
  <button :dataColor @click="changeColorBtn">
    КНОПКА меняет цвет по атрибуту
  </button>
  <div v-html="rawHtml"></div>
  <input v-bind="inputAttributes" /> <br />
  <button @click="isVisible = !isVisible">Скрыть/ показать текст v-if</button>
  <p v-if="isVisible">Видно</p>
  <form action="">
    <button type="submit" @click.prevent>
      Кнопка Submit форме НЕ перегружает страницу
    </button>
  </form>

  <section class="task-1">
    <p>Как увеличиваются твои навыки при регулярном обучении?</p>
    <p>
      Самостоятельно с докой. Уровень
      <span>{{ count }}</span>
    </p>

    <p>
      Самостоятельно с докой и ИИ. Уровень
      <span>{{ count * 2 }}</span>
    </p>
    <p>
      Самостоятельно с докой и ИИ, наставником, группой поддержи и
      "помогаторами". Уровень
      <span>{{ count * 10 }}</span>
    </p>
    <Button @click="count++">День {{ count }}</Button>
    <p>
      Разовое изучение на 10 часов один раз в год.Уровень
      <span>{{ shallowCount.count.count }}</span>
      <Button @click="turboFunc">Попробовать Турбо 1 раз</Button>
      <Button @click="turbo10Func">Турбо 10 раз Уровень через 10 лет</Button>
    </p>
  </section>
  <section class="task-2">
    <input v-model="word" type="text" placeholder="Введите текст" />
    <p>Слово: {{ word }}</p>
    <p>Длина слова - {{ word.length }}</p>
    <p>Слово наоборот: {{ word.split("").reverse().join("") }}</p>
    <p>БОЛЬШИМИ БУКВАМИ : {{ upperCaseFunc(word) }}</p>
  </section>
  <section class="task-3">
    <label
      >Введите пароль первые 6 букв клавиатуры
      <input v-model="password" type="password"
    /></label>
    <p>Админ {{ password === "qwerty" ? "Пароль верный" : "ОШИБКА ПАРОЛЯ" }}</p>
    <img v-if="password === 'qwerty'" src="/src/assets/success.png" />
    <img v-else-if="password === ''" src="/src/assets/start.jpeg" />
    <img v-else src="/src/assets/fail.jpeg" />
  </section>
  <section class="task-3">
    <time :title="currentDateTitle(today)">{{ currentTime(today) }}</time>
  </section>
</template>

<style scoped>
* {
  margin-bottom: 10px;
  margin-top: 0px;
}
h1 {
  color: rebeccapurple;
}

button[dataColor="red"] {
  background-color: brown;
  color: aliceblue;
}
button[dataColor="blue"] {
  background-color: blue;
  color: aliceblue;
}

input {
  min-width: 45ch;
}
span {
  color: green;
  font-weight: 900;
}
img {
  width: 100px;
  aspect-ratio: 1;
}
</style>

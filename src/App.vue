<script setup>
import { ref, reactive, shallowRef, defineAsyncComponent } from "vue";
import DifferentColour from "./components/DifferentColour.vue";
import VModel from "./components/V-model.vue";
import vFor from "./components/v-for.vue";
import Destructure from "./components/Destructure.vue";
import VforObj from "./components/VforObj.vue";
import DinamicAtributes from "./components/DinamicAtributes.vue";
import SuccessBtn from "./components/SuccessBtn.vue";
import EventTask from "./components/EventTask.vue";
import WatchEffect from "./components/WatchEffect.vue";
import WatchApi from "./components/WatchApi.vue";
import WatchApiAsync from "./components/WatchApiAsync.vue";
import FormValidatin from "./components/FormValidatin.vue";
import RefVfor from "./components/RefVfor.vue";
import LoadingComponent from "./components/LoadingComponent.vue";
const DragablElAsync = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(
        () => import("./components/DragablEl.vue").then(resolve),
        1000
      );
    });
  },
  loadingComponent: LoadingComponent,
  delay: 1,
});

const showDragablEl = ref(false);
import FormAgeTotal from "./components/FormAgeTotal.vue";
import ModalWindow from "./components/ModalWindow.vue";
import VmodelComlex from "./components/VmodelComlex.vue";
import InputFormTroughAttr from "./components/InputFormTroughAttr.vue";
import FormRegistraton1 from "./components/FormRegistraton1.vue";
import vSomething from "./components/vSomething.vue";

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

const array = ref(["Привет", "Как дела", "Пока"]);

const objectVfor = reactive({
  name: "Rufina",
  surname: "Litfullina",
  pet: true,
  age: 18,
});
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

const isModalVisible = ref(true);

function closeModal() {
  isModalVisible.value = false;
}
const fio = ref("руфина литфуллина");
const ageOfFio = ref(35);

function onFocus(e) {
  e.target.style.borderColor = "red";
}
</script>

<template>
  <vSomething></vSomething>
  <FormRegistraton1></FormRegistraton1>
  <InputFormTroughAttr
    label="Имя"
    placeholder="Тестируем наследование аттрибутов"
    class="input-large"
    data-test="name-field"
    @focus.self="onFocus"
  ></InputFormTroughAttr
  ><br />
  <VmodelComlex
    v-model:nameAndSurname.capitalize="fio"
    v-model:vozrast="ageOfFio"
  ></VmodelComlex>
  <br />
  <ModalWindow
    :is-modal-opened="isModalVisible"
    @confirmBtn="
      (word) => {
        console.log(word);
        closeModal();
      }
    "
  ></ModalWindow>
  <form-age-total></form-age-total>
  <AlertComponent color="green">
    <template #title-slot> Успешная загрузка</template>
    <template #message-slot> данные загружены на 100%</template>
  </AlertComponent>
  <AlertComponent color="red">
    <template #title-slot> Ошибка</template>
    <template #message-slot> Ошибка сервера 404</template>
  </AlertComponent>
  <AlertComponent color="yellow">
    <template #title-slot> Предупреждение</template>
    <template #message-slot> Нет памяти</template>
  </AlertComponent>
  <ComponentSlot>
    <template #body>Тело заменили</template>
    <p>Заменили</p>
    <template #maininfor></template>
  </ComponentSlot>
  <button @click="showDragablEl = !showDragablEl">Показать кораблики</button>
  <br />
  <DragablElAsync v-if="showDragablEl"></DragablElAsync>
  <RefVfor></RefVfor> <br />
  <FormValidatin></FormValidatin><br />
  <WatchApiAsync></WatchApiAsync><br />
  <WatchApi></WatchApi>
  <WatchEffect></WatchEffect> <br />
  <EventTask></EventTask> <br />
  <SuccessBtn class="success"></SuccessBtn>
  <DinamicAtributes></DinamicAtributes>
  <VforObj></VforObj>
  <Destructure></Destructure>
  <vFor></vFor>
  <VModel></VModel>
  <ul>
    <li v-for="(value, index) in array" :key="value">
      {{ index }} - {{ value }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, key, index) of objectVfor" :key="key">
      {{ index }} / {{ key }} / {{ value }}
    </li>
  </ul>
  <section>
    <h1 @click="greedToggle">{{ title }}</h1>
    <button :dataColor @click="changeColorBtn">
      КНОПКА меняет цвет по атрибуту
    </button>
    <div v-html="rawHtml"></div>
    <DifferentColour></DifferentColour>
    <input v-bind="inputAttributes" /> <br />
    <button @click="isVisible = !isVisible">Скрыть/ показать текст v-if</button>
    <p v-if="isVisible">Видно</p>
    <form action="">
      <button type="submit" @click.prevent>
        Кнопка Submit форме НЕ перегружает страницу
      </button>
    </form>
  </section>
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
    <button @click="count++">День {{ count }}</button>
    <p>
      Разовое изучение на 10 часов один раз в год.Уровень
      <span>{{ shallowCount.count.count }}</span>
      <button @click="turboFunc">Попробовать Турбо 1 раз</button>
      <button @click="turbo10Func">Турбо 10 раз Уровень через 10 лет</button>
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
::v-deep(.input-large) {
  /* позволяет «пробить» scoped-ограничение и применить стиль к внутренним элементам дочернего компонента. */
  height: 100px;
}

::v-deep(.input-large:focus) {
  border-color: red;
}
</style>

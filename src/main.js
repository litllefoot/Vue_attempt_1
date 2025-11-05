import { createApp } from "vue"; // Импортируем функцию createApp из пакета vue.
import App from "./App.vue"; // Импортируем корневой компонент (твой главный компонент App.vue).
import ComponentSlot from "./components/ComponentSlot.vue";
import "./style.css"; // Всё, что в style.css, будет применяться ко всему приложению.
import AlertComponent from "./components/AlertComponent.vue";

const app = createApp(App); // создаёт Vue-приложение и делает App.vue корневым компонентом.
app.component("ComponentSlot", ComponentSlot);
app.component("AlertComponent", AlertComponent);
app.mount("#app"); // Создаём приложение из компонента App и «монтируем» его в HTML-элемент с id="app"

// Если нужно подключить плагины, маршрутизатор или глобальные компоненты:

// const app = createApp(App);

// app.use(router);   // подключить роутинг
// app.use(store);    // подключить Vuex или Pinia
// app.component("MyButton", MyButton); // регистрация глобальный компонент но до прям тут нужно будет сделать import MyButton from

// app.mount("#app");

// app.config.errorHandler = (err) => { console.error("Глобальная ошибка:", err.message)};   // если в любом компоненте случится ошибка (например, деление на 0 или undefined), она не просто сломает приложение, а выведется в консоль через твой обработчик.

// app.config.globalProperties.$version = "1.0.0";   // в любом компоненте можно обратиться к $version и получить "1.0.0".Это удобно для хранения версии API, базовый URL сервера и т. д.

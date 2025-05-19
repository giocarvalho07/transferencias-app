import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o router que acabamos de criar
import store from './store';   // Se você estiver usando o Vuex
import axios from 'axios';
import './assets/main.css'; // Importe os estilos globais

axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App);
app.use(store);
app.use(router); // Use o router na sua aplicação
app.config.globalProperties.$axios = axios;
app.mount('#app');
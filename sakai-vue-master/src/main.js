import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Lara from '@primevue/themes/lara';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
// pinia store
import pinia from "@/stores/index.js";

import '@/assets/icon/iconfont.js';
import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);
app.use(pinia);

app.mount('#app');

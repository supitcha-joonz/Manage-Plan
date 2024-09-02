import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueTablerIcons from 'vue-tabler-icons'



const app = createApp(App)
app.use(createPinia());
app.use(PerfectScrollbarPlugin);
app.use(VueTablerIcons)
app.use(router)
app.use(vuetify)
app.mount('#app')

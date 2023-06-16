import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from './vuex/store'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(store);
app.mount('#app');

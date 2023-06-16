import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from './vuex/store'

createApp(App).use(store).mount('#app')
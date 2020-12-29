import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import init from './origin/Init'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
init()
app.mount('#app')

import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/main.less'
import 'uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

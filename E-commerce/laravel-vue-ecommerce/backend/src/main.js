import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)

.use(store)
.mount('#app')

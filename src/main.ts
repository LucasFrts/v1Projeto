import { createApp } from 'vue'
import dotenv from 'dotenv';
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab)
// dotenv.config()
const app =createApp(App)
app
.component('fa', FontAwesomeIcon)
.mount('#app')
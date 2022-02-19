import { createApp } from 'vue'
import App from './App.vue'
import '@/src/assets/styles/tailwind.css'

import Bootstrap from '@/src/bootstrap'
import '@/src/assets/styles/custom.less'

createApp(App)
.use(Bootstrap)
.mount('#app')

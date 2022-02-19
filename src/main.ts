import { createApp } from 'vue';
import Bootstrap from '@/src/bootstrap';
import Router from '@/src/routers'
import App from './App.vue';

import '@/src/assets/styles/tailwind.css';
import '@/src/assets/styles/custom.less';

createApp(App)
  .use(Bootstrap)
  .use(Router)
  .mount('#app');

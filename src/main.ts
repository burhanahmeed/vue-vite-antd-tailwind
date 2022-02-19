import { createApp } from 'vue';
import Bootstrap from '@/src/bootstrap';
import App from './App.vue';

import '@/src/assets/styles/tailwind.css';
import '@/src/assets/styles/custom.less';

createApp(App)
  .use(Bootstrap)
  .mount('#app');

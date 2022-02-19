import { App } from 'vue';

import Antdv from '@/src/bootstrap/antdv';

export default {
  install: (app: App) => {
    app.use(Antdv);
  },
};

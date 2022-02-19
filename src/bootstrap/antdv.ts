import { App } from 'vue';
import Antdv from 'ant-design-vue';

export default {
  install: (app: App) => {
    app.use(Antdv as any);
  },
};

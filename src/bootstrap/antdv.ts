import { App } from 'vue';
import { Button } from 'ant-design-vue';

const components = [
  Button
]

export default {
  install: (app: App) => {
    components.forEach((comp) => {
      app.use(comp as any)
    })
  }
}
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'; // eslint-disable-line
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'; // eslint-disable-line

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(path.dirname('./')),
      '@': path.resolve(path.dirname('./')),
      '@components': path.resolve(path.dirname('./src/components')),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
});

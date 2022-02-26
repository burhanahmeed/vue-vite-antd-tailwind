import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
    name: 'Eduardo',
    isAdmin: true,
  }),
  getters: {
    // do something
  },
  actions: () => {
    // do something
  },
});

export default {
  useStore,
};

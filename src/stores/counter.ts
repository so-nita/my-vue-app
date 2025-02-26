import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      name: 'zhangsan'
    }
  },
  getters: {
    doubleCount: (state) => {
      state.count * 2;
    }
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },

    reset() {
      this.count = 0;
    },


  },


})
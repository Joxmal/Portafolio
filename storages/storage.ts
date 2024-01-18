import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      mensaje: 'mensaje' 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.mensaje
    },
  },
})
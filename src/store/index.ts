import { defineStore } from 'pinia'

export const useUserStore = defineStore('userState', {
  state: () => ({
    user: null,
    isAdmin: false
  })
})


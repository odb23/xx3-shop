import type { IUser } from '@/interfaces/IUser'
import { defineStore } from 'pinia'

type T_UserState = {
  user: IUser | null
  isAdmin: false
}
export const useUserStore = defineStore('userState', {
  state: () : T_UserState => ({
    user: null,
    isAdmin: false
  })
})

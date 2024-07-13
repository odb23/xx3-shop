<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/store/index'
import { signOutUserAccount } from '@/services/auth'

const store = useUserStore()

function signOut(e) {
  e?.stopPropagation()
  signOutUserAccount()
    .then(() => {
      store.user = null
    })
    .catch((e) => {
      //TODO: handle user logout error
    })
}
</script>

<template>
  <nav class="bg-black text-white px-4">
    <div class="container flex justify-between items-center mx-auto">
      <address class="sm:space-x-2 text-xs hidden sm:block">
        <span>NG,</span>
        <a href="mailto:oodulaja23@gmail.com" class="hover:underline transition-all duration-75"
          >oodulaja23@gmail.com</a
        >
      </address>
      <div v-if="!store?.user" class="inline-flex items-center justify-end w-full py-5">
        <RouterLink
          to="sign-in"
          class="hover:underline underline-offset-2 hover:opacity-70 transition-all duration-75 mr-3 text-sm"
        >
          Sign in
        </RouterLink>
        <RouterLink
          to="sign-up"
          class="hover:underline underline-offset-2 hover:opacity-70 transition-all duration-75 text-sm"
        >
          Create account
        </RouterLink>
      </div>
      <div v-else class="w-full inline-flex justify-end">
        <div
          class="inline-flex items-center gap-1 bg-inherit p-2.5 rounded-lg group cursor-pointer relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 rotate-180 group-hover:rotate-0 duration-400 transition-transform ease-linear"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="Arrow / Caret_Down_MD">
              <path
                id="Vector"
                d="M16 10L12 14L8 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <img
            v-if="store.user?.photoURL"
            class="w-6 h-6 rounded-full"
            :src="store?.user?.photoURL"
            alt="profile pic"
          />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="9" r="3" stroke="currentColor" stroke-width="1" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1" />
            <path
              d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
            />
          </svg>
          <div>
            <p class="text-sm font-medium text-right">
              Welcome, {{ store.user?.displayName ?? 'User' }}
            </p>
            <p class="text-xs font-light opacity-80 text-right">{{ store.user?.email }}</p>
          </div>
          <div
            role="dialog"
            class="hidden group-hover:block absolute top-12 mt-2.5 inset-x-0 bg-gray-950 p-1.5 text-white rounded-lg drop-shadow-lg w-full"
          >
            <button
              class="text-sm hover:bg-white/10 rouned-lg w-full p-2 px-3 text-left inline-flex items-center gap-1"
              @click.prevent="signOut"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4399 14.62L19.9999 12.06L17.4399 9.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.76001 12.0601H19.93"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav class="container mx-auto border-b-2 py-2 flex justify-between items-center">
    <span class="text-2xl font-semibold">O-Shop</span>
    <!-- <input
      type="search"
      placeholder="Search products"
      class="appearance-none bg-gray-300 rounded-md py-1 px-2.5 max-w-[600px] w-full focus:outline-none"
    /> -->
    <button class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path d="M15 14V12" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path d="M9 14V12" stroke="black" stroke-width="2" stroke-linecap="round" />
        <path
          d="M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H16C17.8856 8 18.8284 8 19.4142 8.58579C20 9.17157 20 10.1144 20 12V13C20 16.7712 20 18.6569 18.8284 19.8284C17.6569 21 15.7712 21 12 21V21C8.22876 21 6.34315 21 5.17157 19.8284C4 18.6569 4 16.7712 4 13V12Z"
          stroke="black"
          stroke-width="2"
        />
      </svg>
      <span class="bg-gray-700 text-white px-1.5 rounded-full text-xs">0</span>
    </button>
  </nav>
</template>

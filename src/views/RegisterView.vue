<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { createUseAccountWithEmailAndPassword, signInWithUserGoogleAccount } from '@/services/auth'
import { useUserStore } from '@/store'

const store = useUserStore()
const router = useRouter()
const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleSignUp() {
  const trimmedFN = fullName.value?.trim()
  const trimmedEmail = email.value?.trim()

  if (!trimmedEmail || !trimmedFN || !password.value || !confirmPassword.value) {
    // TODO: alert - one or more input field(s) are empty
    return
  }

  if (password.value !== confirmPassword.value) {
    // TODO: alert - password is not the same as confirm password
    return
  }

  createUseAccountWithEmailAndPassword(trimmedEmail, trimmedFN, fullName.value)
    .then((user) => {
      if (!user) return
      if (user instanceof Error) return
      store.user = user
      router.push({ name: 'home' })
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
}

function handleLoginWithGoogle() {
  signInWithUserGoogleAccount()
    .then((user) => {
      if (!user) return
      if (user instanceof Error) return
      router.push({ name: 'home' })
    })
    .catch((e) => console.log(e))
}
</script>

<template>
  <main class="bg-white w-full h-screen relative overflow-hidden">
    <div class="flex flex-col gap-4 items-center justify-center h-full p-3.5 max-w-[400px] mx-auto">
      <div class="space-y-2">
        <h3 class="text-black text-center text-xl md:text-2xl lg:text-3xl font-bold">
          ogShop - Sign up
        </h3>
        <p class="text-black text-center font-italic font-medium">
          Fill in your information in the form below to create an account.
        </p>
      </div>
      <form @submit.prevent="handleSignUp" className="w-full space-y-4">
        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="name" class="text-black text-left"> Your Full Name* </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            v-model="fullName"
            maxlength="30"
            placeholder="Dammy Dammy"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>

        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="email" class="text-black text-left"> Your Email Address* </label>
          <input
            type="email"
            name="email"
            required
            v-model="email"
            id="email"
            placeholder="odb23@dammy.com"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>

        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="password" class="text-black text-left"> Password* </label>
          <input
            type="password"
            name="password"
            required
            v-model="password"
            id="password"
            placeholder="**************"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>
        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="confirmPassword" class="text-black text-left"> Confirm Password* </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="**************"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>

        <div class="flex flex-col gap-4 items-start justify-start mt-2">
          <button
            type="submit"
            class="bg-black text-white py-3 w-full flex flex-row gap-2 items-center justify-center rounded-md"
          >
            Sign Up
          </button>
          <p class="text-center w-full">Or</p>
          <button
            type="button"
            @click.prevent="handleLoginWithGoogle"
            class="border-solid border-black border py-3 w-full flex flex-row gap-3 items-center justify-center rounded-md"
          >
            <svg
              class="shrink-0 w-6 h-6 relative overflow-visible"
              style=""
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 11.7898C21.5 15.9398 19.29 20.9998 12.63 20.9998C7.62461 21.033 3.53852 17.0051 3.5 11.9998C3.53852 6.99437 7.62461 2.96646 12.63 2.99972C14.7007 3.0074 16.7085 3.71189 18.33 4.99972C18.442 5.09125 18.5109 5.22533 18.52 5.36972C18.5206 5.51581 18.463 5.65613 18.36 5.75972C17.709 6.35492 17.0882 6.98237 16.5 7.63972C16.3289 7.82802 16.0422 7.85408 15.84 7.69972C14.9161 7.016 13.7888 6.6637 12.64 6.69972C9.68528 6.69972 7.29 9.095 7.29 12.0498C7.29 15.0045 9.68528 17.3998 12.64 17.3998C15.64 17.3998 16.91 16.1198 17.57 13.8498H13C12.7239 13.8498 12.5 13.6259 12.5 13.3498V10.6998C12.5 10.4236 12.7239 10.1998 13 10.1998H21C21.2302 10.1983 21.4244 10.3709 21.45 10.5998C21.4871 10.9953 21.5038 11.3925 21.5 11.7898Z"
                fill="black"
              />
            </svg>

            Sign In with Google
          </button>
        </div>
      </form>
      <div class="flex flex-row gap-[5px] items-center justify-start shrink-0 relative">
        <span> Already have an account? </span>
        <RouterLink to="sign-in" class="underline"> Log In </RouterLink>
      </div>
    </div>
  </main>
</template>

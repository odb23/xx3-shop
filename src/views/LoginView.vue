<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { signInWithUserEmailAndPassword, signInWithUserGoogleAccount } from '@/services/auth'
import { ref } from 'vue'
import { useUserStore } from '@/store/index.ts'

const store = useUserStore()


const email = ref('')
const password = ref('')
const router = useRouter()

function handleLoginWithEmailAndPassword() {
  const trimmedEmail = email.value.trim()
  if (trimmedEmail || !password.value) {
    // TODO: add error message alert
    return
  }

  signInWithUserEmailAndPassword(trimmedEmail, password.value)
    .then((user) => {
      store.user = user
      router.push({ name: 'home' })
    })
    .catch(() => {
      // display error message - alert
    })
}

function handleLoginWithGoogle() {
  signInWithUserGoogleAccount()
    .then((user) => {
      store.user = user
      router.push({ name: 'home' })
    })
    .catch((e) => console.log(e))
}
</script>

<template>
  <main class="bg-white w-full h-screen relative overflow-hidden">
    <div class="flex flex-col gap-4 items-center justify-center h-full max-w-[400px] p-3.5 mx-auto">
      <div class="space-y-2">
        <h3 class="text-black text-center text-xl md:text-2xl lg:text-3xl font-bold">
          ogShop23 - Sign in
        </h3>
        <!-- <p class="text-black text-center font-italic font-medium">
          Fill in your information in the form below to create an account.
        </p> -->
      </div>
      <form className="w-full space-y-4" @submit.prevent="handleLoginWithEmailAndPassword">
        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="email" class="text-black text-left"> Your Email Address* </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            v-model="email"
            placeholder="odb23@dammy.com"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>

        <div class="w-full flex flex-col gap-2 items-start justify-start">
          <label for="password" class="text-black text-left"> Password* </label>
          <input
            type="password"
            name="password"
            v-model="password"
            required
            id="password"
            placeholder="**************"
            class="bg-gray-200 border-gray-800 border p-2.5 w-full focus:outline-none rounded-md"
          />
        </div>
        <div class="flex flex-col gap-4 items-start justify-start mt-2">
          <button
            type="submit"
            class="bg-black text-white py-3 w-full flex flex-row gap-2 items-center justify-center rounded-md"
          >
            Sign In
          </button>
          <p class="text-center w-full">Or</p>
          <button
            class="border-solid border-black border py-3 w-full flex flex-row gap-3 items-center justify-center rounded-md"
            type="button"
            @click.prevent="handleLoginWithGoogle"
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
        <span> Don't have an account? </span>
        <RouterLink to="sign-up" class="underline"> Sign up </RouterLink>
      </div>
    </div>
  </main>
</template>

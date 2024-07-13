<script setup lang="ts">
import { ref, watch, onBeforeMount, onBeforeUnmount } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { auth } from '@/configs/firebase'
import { useUserStore } from '@/store/index.ts'
import { onAuthStateChanged } from 'firebase/auth'

let unsubscribe = null
onBeforeMount(() => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      store.user = user
      console.log('There is a user signed in!')
    }
  })
})

onBeforeUnmount(() => {
  if (unsubscribe !== null) {
    unsubscribe()
  }
})

const route = useRoute()
const store = useUserStore()

const navigationDisabled = ref(false)
const noNavRoutes = ['sign-in', 'sign-up']

function checkRoutes(): void {
  const routeName = route?.name
  if (!routeName) return

  navigationDisabled.value = noNavRoutes.includes(routeName.toString())
}

checkRoutes()
watch(route, checkRoutes)
</script>

<template>
  <Navbar v-if="!navigationDisabled" />

  <RouterView />

  <Footer v-if="!navigationDisabled" />
</template>

<style scoped></style>

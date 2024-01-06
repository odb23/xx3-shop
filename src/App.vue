<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
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

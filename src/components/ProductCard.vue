<template>
  <div class="relative">
    <RouterLink to="/product/product-id" class="relative w-full overflow-hidden rounded-lg">
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
        alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
        class="h-auto aspect-square w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        class="absolute inset-x-0 bottom-0 inset-y-1/2 bg-gradient-to-t from-black opacity-60"
      ></div>
      <p class="font-bold text-white absolute right-2 bottom-1 text-sm">₦140</p>
    </RouterLink>
    <RouterLink to="/product/product-id" >
      <h3 class="text-sm font-medium text-gray-900 pt-3">Zip Tote Basket</h3>
      <p class="pt-1 text-sm text-gray-500">White and black</p>
    </RouterLink>
    <div class="pt-3">
      <a
        href="#"
        class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >Add to cart<span class="sr-only">, Zip Tote Basket</span></a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

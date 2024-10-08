<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
const openMobileFilterModal = ref(false)
const openSortOptions = ref(false)

const toggleSortOption = () => {
  openSortOptions.value = !openSortOptions.value
}

const toggleMobileFiltersDisplay = () => {
  openMobileFilterModal.value = !openMobileFilterModal.value
}
</script>

<template>
  <div class="pt-8 lg:pt-12">
    <div
      v-if="openMobileFilterModal"
      class="relative z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-25"></div>

      <div class="fixed inset-0 z-40 flex">
        <div
          class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
        >
          <div class="flex items-center justify-between px-4">
            <h2 class="text-lg font-medium text-gray-900">Categories</h2>
            <button
              type="button"
              class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              @click="toggleMobileFiltersDisplay"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Filters -->
          <form class="mt-4 border-t border-gray-200">
            <h3 class="sr-only">Categories</h3>
            <ul role="list" class="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" class="block px-2 py-3">All</a>
              </li>
              <li>
                <a href="#" class="block px-2 py-3">Breads</a>
              </li>
              <li>
                <a href="#" class="block px-2 py-3">Diary</a>
              </li>
              <li>
                <a href="#" class="block px-2 py-3">Fruits</a>
              </li>
              <li>
                <a href="#" class="block px-2 py-3">Seasoning and Spices</a>
              </li>
              <li>
                <a href="#" class="block px-2 py-3">Vegetables</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>

    <main class="px-4 sm:px-6 lg:px-0 container mx-auto">
      <div class="flex items-baseline justify-between border-b border-gray-200 pb-2 ">
        <h1 class="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
          Available Products
        </h1>

        <div class="flex items-center">
          <div class="relative inline-block text-left">
            <button
              type="button"
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              @click="toggleSortOption"
            >
              Sort
              <svg
                class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="openSortOptions"
              class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Newest</a
                >
                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  >Price: Low to High</a
                >
                <a
                  href="#"
                  class="text-gray-500 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-4"
                  >Price: High to Low</a
                >
              </div>
            </div>
          </div>
          <button
            type="button"
            class="-m-2 ml-2 p-2 text-gray-700 hover:text-gray-500 sm:ml-6 md:hidden"
            @click="toggleMobileFiltersDisplay"
          >
            <span class="sr-only">Filters</span>
            <svg class="h-4 w-4" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" class="relative">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <form class="hidden md:block relative pb-24">
            <h3 class="sr-only">Categories</h3>
            <ul
              role="list"
              class="space-y-4 border-b border-gray-200 pt-6 pb-6 text-sm font-medium text-gray-900 sticky top-0"
            >
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Breads</a>
              </li>
              <li>
                <a href="#">Diary</a>
              </li>
              <li>
                <a href="#">Fruits</a>
              </li>
              <li>
                <a href="#">Seasoning and Spices</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
            </ul>
          </form>
          <div class="lg:col-span-3 pb-24 pt-6">
            <div class="mt-8 grid gap-y-12 grid-cols-2 gap-x-4 lg:grid-cols-4 xl:gap-x-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
             
              <!-- More products... -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

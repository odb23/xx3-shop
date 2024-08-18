<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="flex items-center text-sm">
          <RouterLink to="/" class="font-medium text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 !m-0 !p-0">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 duration-400 transition-transform ease-linear rotate-90"
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
            Back to Homepage
            
          </RouterLink>
        </div>

        <div class="mt-4">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Name</h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">Price</p>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">
              Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam
              repellendus nemo iusto velit ut eaque. Consequatur, blanditiis nostrum quas, maxime
              voluptates corporis magnam fugit quo, quos neque modi voluptatem.
            </p>
          </div>

          <div class="mt-6 flex items-center">
            <svg
              class="h-5 w-5 flex-shrink-0 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="ml-2 text-sm text-gray-500">In stock</p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg"
            alt="Model wearing light green backpack with black canvas straps and front zipper pouch."
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-8 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div>
              <h2 class="text-sm font-medium text-gray-900">Color</h2>

              <fieldset aria-label="Choose a color" class="mt-2">
                <div class="flex items-center space-x-3">
                  <!-- Active and Checked: "ring ring-offset-1" -->
                  <label
                    aria-label="Black"
                    class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
                  >
                    <input type="radio" name="color-choice" value="Black" class="sr-only" />
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                    ></span>
                  </label>
                  <!-- Active and Checked: "ring ring-offset-1" -->
                  <label
                    aria-label="Heather Grey"
                    class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                  >
                    <input type="radio" name="color-choice" value="Heather Grey" class="sr-only" />
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-400"
                    ></span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900">Size</h2>
                </div>

                <fieldset aria-label="Choose a size" class="mt-2">
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-indigo-500 ring-offset-2"
                    Checked: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700", Not Checked: "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                  -->
                    <label
                      class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="XXS" class="sr-only" />
                      <span>XXS</span>
                    </label>

                    <label
                      class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="XS" class="sr-only" />
                      <span>XS</span>
                    </label>

                    <label
                      class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="S" class="sr-only" />
                      <span>S</span>
                    </label>

                    <label
                      class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="M" class="sr-only" />
                      <span>M</span>
                    </label>

                    <label
                      class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="L" class="sr-only" />
                      <span>L</span>
                    </label>

                    <label
                      class="flex cursor-not-allowed items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase opacity-25 sm:flex-1"
                    >
                      <input type="radio" name="size-choice" value="XL" disabled class="sr-only" />
                      <span>XL</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="mt-10">
              <button
                type="submit"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to cart
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>

  <!-- 
  REVIEWS
   <div class="ml-4 border-l border-gray-300 pl-4">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                     Active: "text-yellow-400", Default: "text-gray-300"
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">1624 reviews</p>
              </div>
            </div>
   
   -->
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

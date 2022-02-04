<template>
  <nav>
    <svg
      class="fixed bottom-3 right-5 z-40 block h-10 w-10 cursor-pointer fill-gray-700 md:hidden print:hidden"
      viewBox="0 0 60 60"
      @click="isMobileNav = !isMobileNav"
    >
      <circle r="28" cx="30" cy="30" />
    </svg>
    <div
      :class="{
        hidden: !isMobileNav,
        'smNav-slideIn w-full bg-white md:flex md:hidden md:w-auto md:items-center fixed top-0 z-10': true,
      }"
    >
      <ul class="p-4 text-base text-gray-700">
        <li v-for="button in buttons" :key="button.to" @click="isMobileNav = !isMobileNav">
          <NuxtLink
            class="block py-2 hover:text-purple-400 hover:underline hover:decoration-wavy md:p-4"
            :to="button.to"
          >
            {{ button.text }}
          </NuxtLink>
        </li>
        <li>
          <a
            class="block py-2 text-purple-400 hover:underline hover:decoration-wavy md:p-4"
            href="mailto:aron@kyleback.com"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden md:visible md:flex md:justify-between md:p-16">
      <div class="flex items-center space-x-2">
        <a href="https://github.com/Collbrothers" target="_blank">
          <img
            src="~assets/images/image0.jpeg"
            alt="null"
            class="h-16 w-16 rounded-full border-2 border-pink-500 border-opacity-25 object-cover hidden md:block"
          >
        </a>
      </div>
      <div class="flex w-1/3 items-center space-x-2">
        <div class="flex w-full justify-center space-x-20">
          <NuxtLink
            v-for="(button, i) in buttons"
            :key="button.text"
            :to="button.to"
            :class="{
              'text-3xl': i === 1,
              'text-xl': i !== 1,
              'hover:underline hover:decoration-wavy': true,
            }"
          >
            {{ button.text }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <div
          class="rounded-lg border-2 border-purple-500 bg-indigo-500 p-2 transition duration-300 ease-out hover:scale-110 hover:border-4 hover:border-dotted"
        >
          <a href="mailto:aron@kyleback.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data () {
    return {
      isMobileNav: false,
      buttons: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: "About",
          to: "/about"
        },
        {
          text: "Setup",
          to: "/setup"
        }
      ]
    }
  }
})
</script>
<style>
.smNav-slideIn {
  animation: slideIn 0.5s ease-out forwards;
}

@keyframes slideIn {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

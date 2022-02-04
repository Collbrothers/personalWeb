<template>
  <div class="container mx-auto">
    <h4 class="text-4xl uppercase text-center md:text-2xl md:normal-case md:text-justify">
      Projects
    </h4>
    <div class="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 h-full bg-white 2xl:rounded-md p-5">
      <div v-for="project in projects" :key="project.title" class="text-gray-700">
        <h5 class="text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 md:bg-gradient-to-r">
          {{ project.title }}
        </h5>
        <p class="text-sm">
          {{ project.description }}
        </p>
        <span
          v-for="tag in project.tags"
          :key="tag"
          :class="{
            'bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded select-none': true,
            '!bg-red-200 !text-red-800': tag.toUpperCase() === `DEPRECATED`,
            '!bg-yellow-200 !text-yellow-800': tag.toUpperCase() === `ARCHIVED`
          }"
        >
          {{ tag.toUpperCase() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data () {
    return {
      projects: [
        {
          title: "EStudier",
          description: "A modern, secure & easy-to-use school platform",
          tags: ["Closed Source", "Beta", "VueJS", "NuxtJS", "NestJS", "PostgreSQL", "TypeORM"]
        },
        {
          title: "Sign-logger",
          description: "9 Font Colors, 8 Background Colors with an easy-to-use client",
          tags: ["Open Source", "v1.0.0", "NodeJS", "NPM"]
        },
        {
          title: "EvolveJS",
          description: "A Discord Library written in Typescript for Javascript and Typescript",
          tags: ["Open Source", "Websocket", "Archived"]
        },
        {
          title: "Collatz Conjecture",
          description: "A fun & simple program to run a loop and test integer against the Collatz Conjecture",
          tags: ["Open Source", "C++"]
        }
      ]
    }
  },
  head: {
    title: "Home | Aron Kylebäck"
  }
})
</script>

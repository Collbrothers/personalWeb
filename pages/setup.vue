<template>
  <div class="container mx-auto">
    <div v-for="(section, i) in sections" :key="i">
      <div class="bg-white py-8 lg:my-8 2xl:rounded">
        <Header class="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 md:bg-gradient-to-r">
          {{ section.title }}
        </Header>
      </div>
      <div class="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(item, ii) in section.content" :key="ii">
          <h3
            class="mb-2 text-2xl hover:text-blue-800 hover:underline hover:decoration-wavy"
          >
            <a
              :href="`https://www.google.com/search?q=${item.title}`"
              target="_blank"
            >{{ item.title }}</a>
          </h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data () {
    return {
      sections: [
        {
          title: "Software",
          content: [
            {
              title: "Webstorm",
              desc: "Webstorm is my IDE of choice when I develop Web applications; NodeJS, NestJS, Vue, Tailwind and more..."
            },
            {
              title: "Brave",
              desc: "Brave is a bold choice; performance lacks compared to others, but compatibility & UX is really where Brave shines"
            },
            {
              title: "Wappalyzer",
              desc: "Wappalyzer is not really a required software; but it's a fun addon. Wappalyzer shows you the techstack the current website uses, this data is collected by X-Powered-By, global variables etc..."
            },
            {
              title: "Bitwarden",
              desc: "Bitwarden is an open source & free software for managing and creating passwords"
            },
            {
              title: "Windows 11",
              desc: "While I badly want to switch to Arch & i3 windows really has me trapped; I'm a gamer, I wanna be able to game on the same operating system I work on..."
            },
            {
              title: "Github & Git",
              desc: ""
            }
          ]
        },
        {
          title: "Internal Hardware",
          content: [
            {
              title: "I7-8700K 6 Core 5GHz",
              desc: "Might not get as much attention these days, but I still love it. Easily overclocked to 5GHz with a more than stable cooling system"
            },
            {
              title: "Gigabyte Eagle 3080 Ti 12GB",
              desc: "My most recent upgrade; This beast runs at ~25°C @ idle and around ~50°C when running live raytracing games"
            },
            {
              title: "Vengeance RGB Pro 64GB (4x16GB)",
              desc: "Most definitely the most important upgrade, with these babies installed I can run any program I want, at any time"
            }
          ]
        },
        {
          title: "External Hardware",
          content: [
            {
              title: "27\" Predator XB271HU",
              desc: "This IPS beauty spans over 2560x1440 pixels with GSync and 144hz, the perfect fit for gaming & work"
            },
            {
              title: "27\" Voixcon O27UHDP",
              desc: "This monitor is a must have for second screens; 3840x2160 (4K) UHD IPS with 1.07 billion colors"
            },
            {
              title: "Razer Blackwidow V3",
              desc: "Comfortable, appealing and easy to use, a must for any programmer"
            },
            {
              title: "Razer Basilisk V1",
              desc: "One of the better mice I've ever used; it's a very comfortable one with the thumb rest, and a very good gaming experience"
            }
          ]
        }
      ]
    }
  },
  head: {
    title: "Setup | Aron Kylebäck"
  }
})
</script>

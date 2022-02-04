<template>
  <div class="lg:flex lg:flex-row">
    <div class="basis-1/2 fadeIn">
      <Header class="text-5xl lg:text-8xl">
        Aron Kylebäck
      </Header>
      <div>
        <h2 class="text-2xl lg:text-4xl text-center">
          A {{ age }} year old Fullstack Developer
        </h2>
      </div>
    </div>
    <div class="basis-1/2">
      <ol class="relative border-l border-gray-700 fadeTop">
        <li v-for="(item, i) in timeline" :key="i" class="mb-10 ml-4">
          <div class="absolute w-3 h-3 rounded-full -left-1.5 bg-gray-700 mt-2" />
          <time class="mb-1 text-sm font-normal leading-none">{{ item.date }}</time>
          <h3 class="text-lg font-semibold underline decoration-4 decoration-gray-700">
            {{ item.title }}
          </h3>
          <p class="text-base font-normal" v-html="item.desc" />
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import Vue from "vue"

export default Vue.extend({
  data () {
    return {
      age: 0,
      timeline: [
        {
          date: "February 2019 (13 Y/O)",
          title: "Introduced to Programming",
          desc: "My introduction to programming happened at the age of 13, in 6th grade. We were instructed to make a simple Rock, Paper, Scissors game with Microbits Code blocks. I found this very interesting, and saw a \"Javascript\" tab, I clicked on it and I was immediately lost. But after some research I found that programming wasn't something to be scared by."
        },
        {
          date: "March 2019 (13 Y/O)",
          title: "First Discord Bot & Client",
          desc: "Right off the bat I started looking in to how discord bots were created. One thing led to another and I found Discord.js, a up & coming Api wrapper that seemed promising. I started making bots to make fun & troll my friends, then I got my first freelancing offer. I had to create a simple moderation bot and got paid 20$ for it. I was so happy to be able to make money from my hobby."

        },
        {
          date: "June 2020 (14 Y/O)",
          title: "Met a programming buddy",
          desc: "After around a year of programming, I got introduced to a lot of new people & communities. One of those people were <a href='https://romeah.netlify.app/' class='small' target='_blank'>Romeah</a>, a young programmer from India. "
        },
        {
          date: "April 2021 (14 Y/O)",
          title: "Employed as a Full Stack Developer (MEVN)",
          desc: "After some fun years of programming I landed my first contract. I was (and currently am) employed as a consultant for <a href='https://www.mmrsolutions.se/home' class='small' target='_blank'>MMR Solutions</a>, a successful startup based in Stockholm"
        },
        {
          date: "April 2021 (14 Y/O)",
          title: "Blazify Organization",
          desc: "I joined and worked with Romeah for his Organization <a href='https://blazify.tech/' class='small' target='_blank'>Blazify</a>, where I am now Co-Owner."
        },
        {
          date: "The future",
          title: "The future",
          desc: "Who knows what the future holds? I'm sure I'll be working on some cool stuff in the near future :)"
        }
      ]
    }
  },
  head: {
    title: "About | Aron Kylebäck"
  },
  mounted () {
    this.age = Math.abs(new Date(Date.now() - new Date("2006 09 02").getTime()).getUTCFullYear() - 1970)
  }
})
</script>
<style>
@keyframes fadeTop{
  0% {
    opacity: 0;
    transform: translateY(-40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeTop {
  animation: fadeTop 1.5s ease-in-out;
}

.fadeIn {
  animation: fadeIn 1.5s ease-in-out;
}
</style>

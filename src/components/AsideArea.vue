<template>
  <aside
    class="relative bg-stone-950 border-r border-r-gray border-r-solid col-auto hidden sm:block"
  >
    <h1 class="text-center text-41 text-white mt-10">CAT {{ counter.count }}</h1>
    <div class="w-full h-32 absolute bottom-10 flex flex-col justify-between">
      <div
        class="w-5 h-5 mx-auto"
        v-for="(item, index) in socialImgArr"
        :key="index"
      >
        <img class="w-full h-auto mb-0" :src="item.url" :alt="item.alt" />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import twitterImg from "@/assets/tumblr.svg";
import linkedinImg from "@/assets/linkedin.svg";
import facebookImg from "@/assets/facebook.svg";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
window.setInterval(() => {
  counter.increment();
}, 1000);

const socialImgArr = ref([
  { url: twitterImg, alt: "Twitter" },
  { url: linkedinImg, alt: "Linkedin" },
  { url: facebookImg, alt: "Facebook" },
]);
</script>

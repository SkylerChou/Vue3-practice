<template>
  <aside
    class="relative col-auto hidden border-r border-r-solid bg-stone-950 border-r-gray sm:block"
  >
    <h1 class="mt-10 text-center text-white text-41">CAT {{ counter.count }}</h1>
    <div class="absolute h-32 w-full flex flex-col justify-between bottom-10">
      <div
        class="mx-auto h-5 w-5"
        v-for="(item, index) in socialImgArr"
        :key="index"
      >
        <img class="mb-0 h-auto w-full" :src="item.url" :alt="item.alt" />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import twitterImg from '@/assets/tumblr.svg';
import linkedinImg from '@/assets/linkedin.svg';
import facebookImg from '@/assets/facebook.svg';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
window.setInterval(() => {
  counter.increment();
}, 1000);

const socialImgArr = ref([
  { url: twitterImg, alt: 'Twitter' },
  { url: linkedinImg, alt: 'Linkedin' },
  { url: facebookImg, alt: 'Facebook' },
]);
</script>

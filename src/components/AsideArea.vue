<template>
  <aside
    border="r r-solid r-gray"
    bg-stone-950
    class="relative col-auto hidden md:block"
  >
    <h1 text="center white 41">CAT <br/>{{ counter.count }}</h1>
    <div h-32 w-full flex="~ col" class="absolute justify-between bottom-10">
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

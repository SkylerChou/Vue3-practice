<script setup>
import InfoBanner from '@/components/InfoBanner.vue';
</script>

<template>
  <div
    class="h-full pt-16 pl-10 pr-10 sm:pt-44 sm:pl-20 bg-scroll bg-contain bg-center bg-no-repeat"
    style="background-image: url('./src/assets/Bg-pc.png')"
  >
    <div class="grid grid-cols-12 text-white">
      <div class="hidden sm:block sm:col-span-4">
        <h3
          class="relative text-3xl tracking-widest font-normal leading-10 border-b-white border-b-solid pb-2 after:content-[''] after:absolute after:left-0 after:-bottom-3px after:w-1/2 after:border-b-yellow-200 after:border-b-solid"
        >
          / 01
        </h3>
        <p class="text-xl font-medium mt-6">About Cat</p>
        <p class="text-sm text-gray-500">Sences</p>
        <p class="text-sm text-gray-500">Behavior</p>
      </div>
      <div
        class="col-span-12 leading-6 sm:col-start-8 sm:col-span-4 sm:leading-7"
      >
        <h2 class="text-4xl sm:text-7xl font-bold mb-3 sm:mb-6">
          EAT<br />EVERYDAY
        </h2>
        <p class="text-21">
          The cat is a domestic species of small carnivorous mammal.It is the
          only domesticated species in the family Felidae and is often referred
          to as the domestic cat to distinguish it from the wild members of the
          family.
        </p>
      </div>
    </div>
    <InfoBanner class="absolute left-0 bottom-0" />
  </div>
</template>

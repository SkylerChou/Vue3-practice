<template>
  <div class="grid sm:grid-cols-10">
      <div
        class="flex flex-col justify-center bg-black/40 p-4 pl-10 text-base text-white backdrop-blur-[6px] sm:col-span-5 sm:col-start-2"
      >
        <h4 class="mb-3 tracking-4 sm:mb-6">EVENT</h4>
        <div>
          <p class="text-gray-500 tracking-2">
            Cat's Foods @Anything About Cat Club
          </p>
          <p class="tracking-2">SF - Sat,July 14 / 15-17PM</p>
        </div>
        <div class="mt-6 w-12 flex justify-between">
          <div
            v-for="(item, index) in eventArr"
            :key="index"
            :class="`w-1.5 h-1.5 rounded-full bg-${item.activeClass}-500`"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-row-reverse bg-black p-4 sm:col-span-6 sm:col-start-7 sm:flex-row"
      >
        <div class="m-auto">
          <img
            class="m-0 h-auto w-full sm:h-full"
            src="@/assets/pc-Left.png"
            alt="Holding the cat."
          />
        </div>
        <div class="ml-6 flex flex-col justify-center">
          <h4 class="mb-3 text-base text-white tracking-4 sm:mb-6">NEWS</h4>
          <p class="mb-3 pr-3 text-sm text-gray-500 tracking-2 sm:mb-6 sm:pr-6">
            The average lifespan of pet cats has risen in recent decades.
          </p>
          <a
            class="text-base no-underline text-yellow-550 hover:underline"
            href="https://www.youtube.com/"
            >Read more</a
          >
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const eventArr = ref([
  {
    activeClass: 'yellow',
    title: 'EVENT1',
    content: "Cat's Foods @Anything About Cat Club",
    date: 'SF - Sat,July 14 / 15-17PM',
  },
  {
    activeClass: 'gray',
    title: 'EVENT2',
    content: "Cat's Foods @Anything About Cat Club",
    date: 'SF - Sat,July 15 / 15-17PM',
  },
  {
    activeClass: 'gray',
    title: 'EVENT3',
    content: "Cat's Foods @Anything About Cat Club",
    date: 'SF - Sat,July 16 / 15-17PM',
  },
]);
</script>

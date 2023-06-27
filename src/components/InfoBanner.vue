<template>
  <div class="grid sm:grid-cols-10">
      <div
        class="p-4 bg-black/40 sm:col-start-2 sm:col-span-5 text-white text-base flex flex-col justify-center pl-10 backdrop-blur-[6px]"
      >
        <h4 class="tracking-4 mb-3 sm:mb-6">EVENT</h4>
        <div>
          <p class="tracking-2 text-gray-500">
            Cat's Foods @Anything About Cat Club
          </p>
          <p class="tracking-2">SF - Sat,July 14 / 15-17PM</p>
        </div>
        <div class="w-12 flex justify-between mt-6">
          <div
            v-for="(item, index) in eventArr"
            :key="index"
            :class="`w-1.5 h-1.5 rounded-full bg-${item.activeClass}-500`"
          ></div>
        </div>
      </div>
      <div
        class="p-4 sm:col-start-7 sm:col-span-6 flex flex-row-reverse sm:flex-row bg-black"
      >
        <div class="m-auto">
          <img
            class="w-full h-auto m-0 sm:h-full"
            src="@/assets/pc-Left.png"
            alt="Holding the cat."
          />
        </div>
        <div class="flex flex-col justify-center ml-6">
          <h4 class="text-white text-base tracking-4 mb-3 sm:mb-6">NEWS</h4>
          <p class="text-sm tracking-2 text-gray-500 pr-3 sm:pr-6 mb-3 sm:mb-6">
            The average lifespan of pet cats has risen in recent decades.
          </p>
          <a
            class="text-base text-yellow-550 no-underline hover:underline"
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

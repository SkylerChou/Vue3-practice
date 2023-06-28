<template>
  <div class="sm:hidden">
    <div mt-4 p="l-4 r-4" class="flex content-center justify-between">
      <h1 m-0 text="center white 41">CAT</h1>
      <div m="b-auto t-auto" w-6 @click="changeNavState()">
        <img mb-0 h-auto w-full src="@/assets/ham.svg" alt="≡" />
      </div>
    </div>
  </div>

  <div :class="`${sideBarClass} w-full sm:block`">
    <nav
      fixed
      top-20
      h="1/5"
      w-full
      bg-black
      class="sm:(top-0 mr-11 mt-8 h-6 bg-transparent -right-48)"
    >
      <div
        flex="~ col"
        class="content-center justify-between sm:(grid grid-cols-12)"
      >
        <RouterLink
          v-for="(item, index) in navArr"
          :key="index"
          :to="item.path"
          @click="changeNavState()"
          un-text="center white"
          class="no-underline sm:col-span-1 first:col-start-6 hover:(underline text-yellow-550)"
          >{{ item.name }}</RouterLink
        >
        <div mx-auto w-fit>
          <img m-0 h-auto w-full src="@/assets/scope.svg" alt="放大鏡" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const navArr = ref([
  { name: 'Home', path: '/' },
  { name: 'Article', path: '/article' },
  { name: 'About', path: '/about' },
  { name: 'Location', path: '/location' },
  { name: 'News', path: '/news' },
]);

const sideBarClass = ref('hidden');

function changeNavState() {
  if (window.innerWidth > 640) return;
  if (sideBarClass.value === 'hidden') {
    sideBarClass.value = 'block';
  } else {
    sideBarClass.value = 'hidden';
  }
}
</script>

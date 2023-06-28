<template>

   <div class="sm:hidden">
        <div class="mt-4 flex content-center justify-between pl-4 pr-4">
          <h1 class="m-0 text-center text-white text-41">CAT</h1>
          <div class="mb-auto mt-auto w-6" @click="changeNavState()">
            <img class="mb-0 h-auto w-full" src="@/assets/ham.svg" alt="≡" />
          </div>
        </div>
      </div>

      <div :class="`${sideBarClass} sm:block w-full`">
        <nav
          class="fixed top-20 h-1/5 w-full bg-black sm:top-0 sm:mr-11 sm:mt-8 sm:h-6 sm:bg-transparent sm:-right-48"
        >
          <div
            class="flex flex-col content-center justify-between sm:grid sm:grid-cols-12"
          >
            <RouterLink
              v-for="(item, index) in navArr"
              :key="index"
              :to="item.path"
              @click="changeNavState()"
              class="text-center text-white no-underline sm:col-span-1 first:col-start-6 hover:underline hover:text-yellow-550"
              >{{ item.name }}</RouterLink
            >
            <div
              class="text-center text-white no-underline sm:col-span-1 hover:underline hover:text-yellow-550"
            >
              <div class="mx-auto w-fit">
                <img
                  class="m-0 h-auto w-full"
                  src="@/assets/scope.svg"
                  alt=""
                />
              </div>
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
  if (sideBarClass.value === 'hidden') {
    sideBarClass.value = 'block';
  } else {
    sideBarClass.value = 'hidden';
  }
}
</script>

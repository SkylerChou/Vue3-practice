<template>

   <div class="sm:hidden">
        <div class="flex justify-between content-center mt-4 pl-4 pr-4">
          <h1 class="text-center text-41 text-white m-0">CAT</h1>
          <div class="w-6 mt-auto mb-auto" @click="changeNavState()">
            <img class="w-full h-auto mb-0" src="@/assets/ham.svg" alt="≡" />
          </div>
        </div>
      </div>

      <div :class="`${sideBarClass} sm:block w-full`">
        <nav
          class="fixed top-20 sm:top-0 sm:-right-48 w-full h-1/5 bg-black sm:bg-transparent sm:mt-8 sm:mr-11 sm:h-6"
        >
          <div
            class="flex flex-col justify-between content-center sm:grid sm:grid-cols-12"
          >
            <RouterLink
              v-for="(item, index) in navArr"
              :key="index"
              :to="item.path"
              @click="changeNavState()"
              class="text-white text-center no-underline hover:underline hover:text-yellow-550 sm:col-span-1 first:col-start-6"
              >{{ item.name }}</RouterLink
            >
            <div
              class="sm:col-span-1 text-white text-center no-underline hover:underline hover:text-yellow-550"
            >
              <div class="w-fit mx-auto">
                <img
                  class="w-full h-auto m-0"
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
import { ref } from "vue";

const navArr = ref([
  { name: "Home", path: "/" },
  { name: "Article", path: "/article" },
  { name: "About", path: "/about" },
  { name: "Location", path: "/location" },
  { name: "News", path: "/news" },
]);

const sideBarClass = ref("hidden");

function changeNavState() {
  if (sideBarClass.value === "hidden") {
    sideBarClass.value = "block";
  } else {
    sideBarClass.value = "hidden";
  }
}
</script>

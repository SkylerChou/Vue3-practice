<template>
  <div class="grid grid-cols-10 min-h-screen">
    <AsideArea />
    <div
      class="bg-gradient-to-r from-stone-950 to-stone-700 col-span-10 sm:col-span-9"
    >
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import AsideArea from "@/components/AsideArea.vue";
</script>
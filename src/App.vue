<template>
  <div class="min-h-screen" grid="~ cols-10">
    <AsideArea />
    <div
      bg="gradient-to-r"
      class="col-span-10 from-stone-950 to-stone-700 sm:col-span-9"
    >
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import AsideArea from '@/components/AsideArea.vue';
</script>

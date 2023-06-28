<script setup>
import InfoBanner from '@/components/InfoBanner.vue';
import ArticleContent from '@/components/ArticleContent.vue';
</script>

<template>
  <ArticleContent>
    <div grid="~ cols-12" class="text-white">
      <div class="hidden sm:col-span-4 sm:block">
        <h3
          p="b-2"
          text="3xl"
          font="normal"
          border="b-white b-solid"
          tracking="widest"
          leading="10"
          relative
          after:absolute
          after:left-0
          after:border-b-yellow-200
          after:border-b-solid
          after:-bottom-3px
          class="after:w-1/2 after:content-['']"
        >
          / 01
        </h3>
        <p text="xl" font="medium" m="6">About Cat</p>
        <p text="sm gray-500">Sences</p>
        <p text="sm gray-500">Behavior</p>
      </div>
      <div
        col="span-12"
        leadind="6"
        class="sm:col-span-4 sm:col-start-8 sm:leading-7"
      >
        <h2 m="b-3" text="4xl" font="bold" class="sm:mb-6 sm:text-7xl">
          EAT<br />EVERYDAY
        </h2>
        <p text="21">
          The cat is a domestic species of small carnivorous mammal.It is the
          only domesticated species in the family Felidae and is often referred
          to as the domestic cat to distinguish it from the wild members of the
          family.
        </p>
      </div>
    </div>
    <InfoBanner class="absolute bottom-0 left-0" />
  </ArticleContent>
</template>

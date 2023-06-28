<template>
  <div class="sm:(grid grid-cols-10)">
    <div
      flex="~ col"
      p="4 l-10"
      text="base white"
      bg="black/40"
      class="justify-center backdrop-blur-[6px] sm:(col-span-5 col-start-2)"
    >
      <h4 mb-3 class="tracking-4 sm:mb-6">EVENT</h4>
      <div>
        <p text-gray-500 class="tracking-2">
          Cat's Foods @Anything About Cat Club
        </p>
        <p class="tracking-2">SF - Sat,July 14 / 15-17PM</p>
      </div>
      <div m="t-6" w="12" flex class="justify-between">
        <div h="1.5" w="1.5" rounded="full" bg="yellow-500"></div>
        <div h="1.5" w="1.5" rounded="full" bg="gray-500"></div>
        <div h="1.5" w="1.5" rounded="full" bg="gray-500"></div>
      </div>
    </div>
    <div
      flex="~ row-reverse"
      bg-black
      p-4
      class="sm:(col-span-6 col-start-7 flex-row)"
    >
      <div m-auto>
        <img
          m-0
          h-auto
          w-full
          class="sm:h-full"
          src="@/assets/pc-Left.png"
          alt="Holding the cat."
        />
      </div>
      <div ml-6 flex="~ col" class="justify-center">
        <h4 mb-3 text="base white" class="tracking-4 sm:mb-6">NEWS</h4>
        <p mb-3 pr-3 text="sm gray-500" class="tracking-2 sm:(mb-6 pr-6)">
          The average lifespan of pet cats has risen in recent decades.
        </p>
        <a
          class="text-(base yellow-550) no-underline hover:underline"
          href="https://www.youtube.com/"
          >Read more</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

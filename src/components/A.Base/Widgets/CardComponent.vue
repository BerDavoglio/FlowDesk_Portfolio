<template>
  <div class="flex max-w-[15vw] gap-2 my-8">
    <div class="rounded-2xl p-2 w-fit h-fit" :style="{ backgroundColor: color + '30' }">
      <component :is="icon" :size="size" :color="color" :stroke-width="2" />
    </div>
    <div>
      <div class="text-sm font-semibold mb-1">{{ title }}</div>
      <div class="text-xs">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  icon: Object,
  size: {
    type: Number,
    default: 24
  },
  color: String,
  title: String,
  description: String,
})

</script>

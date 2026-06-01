<template>
  <div :class="['h-11 px-6 rounded-lg content-center cursor-pointer',
    isPrimary
      ? 'border border-primary'
      : 'bg-primary text-white']">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
  isPrimary: Boolean
})
</script>

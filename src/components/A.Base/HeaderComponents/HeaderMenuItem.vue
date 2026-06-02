<template>
  <div class="hover:border-b hover:pb-1 cursor-pointer">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
  isPrimary: Boolean
})
</script>

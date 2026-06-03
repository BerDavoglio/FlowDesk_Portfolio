<template>
  <div class="hover:border-b cursor-pointer w-fit">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
})
</script>

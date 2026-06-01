<template>
  <HeaderComponent />

  <RouterView />

  <FooterComponent />
</template>

<script setup>
import FooterComponent from './components/A.Base/FooterComponent.vue';
import HeaderComponent from './components/A.Base/HeaderComponent/HeaderComponent.vue';

</script>

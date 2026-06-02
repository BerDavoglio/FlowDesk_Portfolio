<template>
  <HeaderComponent />

  <RouterView />

  <FooterComponent />
</template>

<script setup>
import FooterComponent from './components/A.Base/FooterComponents/FooterComponent.vue';
import HeaderComponent from './components/A.Base/HeaderComponents/HeaderComponent.vue';

</script>

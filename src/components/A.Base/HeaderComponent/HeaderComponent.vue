<template>
  <div class="flex justify-between w-[65vw] m-auto py-6">
    <img src="@/assets/Logo.png" class="w-50" />
    <div class="flex items-center gap-12">
      <HeaderMenuItem text="Recursos" />
      <HeaderMenuItem text="Como funciona" />
      <HeaderMenuItem text="Preços" />
      <HeaderMenuItem text="Contato" />
    </div>
    <div class="flex items-center gap-4">
      <GenericButtom text="Login" />
      <GenericButtom text="Criar conta" is-primary="false" />
    </div>
  </div>
</template>

<script setup>
import GenericButtom from '../GenericButtom.vue';
import HeaderMenuItem from './HeaderMenuItem.vue';

</script>

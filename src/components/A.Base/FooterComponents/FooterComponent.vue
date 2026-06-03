<template>
  <div class="w-[40vw] m-auto pb-4">
    <div class="justify-center">
      <img src="@/assets/Logo.png" class="w-50" />
      <div>Organize demandas e acompanhe o trabalho da sua equipe.</div>
    </div>
    <div class="border border-primary my-3" />
    <div class="columns-2 justify-between m-auto my-8 gap-8">
      <div class="grid columns-1 justify-items-end">
        <div class="mb-2 font-bold text-lg">Produto</div>
        <FooterMenuItem text="Recursos" />
        <FooterMenuItem text="Como funciona" />
        <FooterMenuItem text="Login" />
        <FooterMenuItem text="Criar conta" />
      </div>
      <div>
        <div class="mb-2 font-bold text-lg">Empresa</div>
        <FooterMenuItem text="Sobre" />
        <FooterMenuItem text="Contato" />
        <FooterMenuItem text="Privacidade" />
        <FooterMenuItem text="Termos" />
      </div>
    </div>
    <div class="border border-primary my-3" />
    <div class="text-sm">© 2026 FlowDesk. Todos os direitos reservados. </div>
  </div>
</template>

<script setup>
import FooterMenuItem from './FooterMenuItem.vue';

</script>

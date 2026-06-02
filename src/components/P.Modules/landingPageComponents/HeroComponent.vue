<template>
  <div class="flex justify-center items-center w-[60vw] m-auto py-8">
    <div class="w-[50%]">
      <div class="text-[32px] font-semibold">
        Organize todas as demandas da sua equipe
        <span class="text-primary">em um só lugar</span>
      </div>
      <div class="py-4">Centralize solicitações, acompanhe o progresso e priorize tarefas automaticamente.</div>
      <div class="flex justify-center gap-4">
        <GenericButtom text="Começar gratuitamente" is-primary="true" />
        <GenericButtom text="Ver demonstração" />
      </div>
    </div>
    <div class="w-[50%] perspective-distant">
      <img src="@/assets/SystemHero.png" class="
          rounded-xl
          shadow-2xl
          transform-[rotateY(-25deg)]
          transition-transform" />
    </div>
  </div>
</template>


<script setup>
import GenericButtom from '@/components/A.Base/Inputs/GenericButtom.vue';

</script>

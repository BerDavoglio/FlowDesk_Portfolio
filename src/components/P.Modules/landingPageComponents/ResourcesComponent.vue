<template>
  <div class="flex justify-between max-w-[65vw] m-auto">
    <CardComponent :icon="Icons.Sparkles" title="Priorização automática"
      description="Score integrado com base em impacto, urgência e prazo." color="#276af4" />
    <CardComponent :icon="Icons.KanbanSquare" title="Kanban Visual"
      description="Acompanhe o fluxo de trabalho com drag and drop." color="#f26917" />
    <CardComponent :icon="Icons.BarChart3" title="Métricas e relatórios"
      description="Tenha insights para tomar decisões melhores." color="#1e6f4a" />
    <CardComponent :icon="Icons.Users" title="Integração com usuários"
      description="Outros usuários podem complementar nas suas tarefas" color="#5497a6" />
  </div>
</template>


<script setup>
import CardComponent from '@/components/A.Base/Widgets/CardComponent.vue';
import { Icons } from '@/composables/icons';

</script>

<template>
  <div class="grid place-content-center text-center w-fit bg-white m-auto rounded-2xl p-16 mb-24 mt-16">
    <img src="@/assets/Logo.png" class="w-50 justify-self-center" />
    <div class="text-sm my-4">Faça login para acessar sua conta</div>
    <div>
      <div class="text-start mb-2">
        <div class="mb-1 font-semibold">E-mail</div>
        <input class="border rounded-md w-full p-2" placeholder="email@email.com" v-model="email" />
        <div class="text-red-400 text-sm" v-if="isEmailValid">Por favor, insira um e-mail válido</div>
      </div>
      <div class="text-start mb-1">
        <div class="mb-1 font-semibold">Senha</div>
        <input class="border rounded-md w-full p-2" placeholder="password" v-model="password" />
      </div>
      <div class="justify-items-end">
        <div class="hover:text-primary text-sm w-fit cursor-pointer">Esqueci minha senha</div>
      </div>
    </div>
    <GenericButtom text="Entrar" class="justify-self-center my-4" />
    <div>Não tem uma conta? <span class="hover:text-primary cursor-pointer">Criar uma conta</span></div>
  </div>
</template>

<script setup>
import GenericButtom from '@/components/A.Base/Inputs/GenericButtom.vue';
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const isEmailValid = false;
</script>

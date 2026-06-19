<script setup lang="ts">
import { useContactsStore } from '../contacts/stores/constacts.store'

const contactsStore = useContactsStore()
</script>
<template>
  <footer class="w-full p-5 px-5">
    <Button class="rounded-full! w-full! h-min" @click="contactsStore.openModal()">
      <i class="pi pi-phone font-black!"></i>
      <p class="text-lg font-bold">Возникли вопросы? Нажмите чтобы связаться с нами!</p>
    </Button>
  </footer>
</template>

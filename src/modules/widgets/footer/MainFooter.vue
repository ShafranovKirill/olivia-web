<script setup lang="ts">
import { useContactsStore } from '../contacts/stores/constacts.store'

const contactsStore = useContactsStore()
</script>
<template>
  <footer class="w-full pb-5 px-5 max-w-7xl">
    <Button class="rounded-full! w-full! h-10!" @click="contactsStore.openModal()">
      <i class="pi pi-phone text-sm pt-1"></i>
      <p>Возникли вопросы? Нажмите чтобы связаться с нами!</p>
    </Button>
  </footer>
</template>

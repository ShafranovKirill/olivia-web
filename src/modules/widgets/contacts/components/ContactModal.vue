<script setup lang="ts">
import { useContactsStore } from '../stores/constacts.store'

const contactsStore = useContactsStore()

const openLink = (url: string) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>
<template>
  <Dialog v-model:visible="contactsStore.isModalOpen">
    <template #header><h2>Контакты</h2></template>
    <template #default>
      <div class="w-full flex flex-col gap-2">
        <div class="flex gap-2">
          <Button
            :label="contactsStore.contacts.phone"
            icon="pi pi-phone"
            @click="contactsStore.makeCall"
            class="w-full!"
          ></Button>
          <Button icon="pi pi-clone" @click="contactsStore.copyPhoneNumber"></Button>
        </div>
        <Button
          class="w-full!"
          icon="pi pi-instagram"
          label="Instagram"
          @click="openLink(contactsStore.contacts.social.instagram)"
        />
      </div>
    </template>
  </Dialog>
</template>

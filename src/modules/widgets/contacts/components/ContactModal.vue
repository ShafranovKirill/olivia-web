<script setup lang="ts">
import { openLink } from '@/utils/browser'
import { useContactsStore } from '../stores/constacts.store'

const contactsStore = useContactsStore()
</script>
<template>
  <Dialog v-model:visible="contactsStore.isModalOpen" modal :dismissableMask="true">
    <template #header><h2>Контакты</h2></template>
    <template #default>
      <div class="w-full flex flex-col gap-2">
        <div class="flex gap-2">
          <Button
            :label="contactsStore.contacts.phoneFormatted"
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

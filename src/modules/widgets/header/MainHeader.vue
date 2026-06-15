<script setup lang="ts">
import { useSidebarStore } from '../sidebar/sidebar.store'

const sidebarStore = useSidebarStore()
</script>
<template>
  <header>
    <Toolbar class="rounded-none!">
      <template #start>
        <Button icon="pi pi-bars" class="mr-2" @click="sidebarStore.toggleSidebar"></Button>
        <div class="font-bold text-xl text-primary">Olivia</div>
      </template>
      <template #end>
        <Button icon="pi pi-shopping-bag"></Button>
      </template>
    </Toolbar>
  </header>
</template>

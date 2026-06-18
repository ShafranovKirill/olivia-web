<script setup lang="ts">
import { useSidebarStore } from '../sidebar/sidebar.store'

const sidebarStore = useSidebarStore()
</script>
<template>
  <header class="w-full bg-gray-200 border-solid">
    <Toolbar class="rounded-none! max-w-7xl mx-auto bg-gray-200! border-0!">
      <template #start>
        <Button icon="pi pi-bars" class="mr-4" @click="sidebarStore.toggleSidebar"></Button>
        <div class="tracking-widest text-4xl font-bold text-slate-900">Olivia</div>
      </template>
      <template #end>
        <Button icon="pi pi-shopping-bag"></Button>
      </template>
    </Toolbar>
  </header>
</template>

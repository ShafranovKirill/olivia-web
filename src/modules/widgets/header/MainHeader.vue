<script setup lang="ts">
import { useSidebarStore } from '../sidebar/sidebar.store'

const sidebarStore = useSidebarStore()
</script>
<template>
  <header>
    <Toolbar class="rounded-none!">
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

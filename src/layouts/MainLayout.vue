>
<script setup lang="ts">
import MainSidebar from '@/modules/widgets/sidebar/MainSidebar.vue'
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200"></header>
    <router-view />
  </div>
  <MainSidebar></MainSidebar>
</template>

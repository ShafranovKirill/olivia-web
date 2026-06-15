>
<script setup lang="ts">
import MainHeader from '@/modules/widgets/header/MainHeader.vue'
import MainSidebar from '@/modules/widgets/sidebar/MainSidebar.vue'
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <MainHeader />
    <router-view />
  </div>
  <MainSidebar></MainSidebar>
</template>

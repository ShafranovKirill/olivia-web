>
<script setup lang="ts">
import CategoryBar from '@/modules/menu/components/category/CategoryBar.vue'
import MainHeader from '@/modules/widgets/header/MainHeader.vue'
import MainSidebar from '@/modules/widgets/sidebar/MainSidebar.vue'
</script>
<template>
  <div class="min-h-screen flex flex-col mx-auto items-center bg-(--p-surface-50)">
    <MainHeader />
    <CategoryBar />

    <main class="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <router-view />
    </main>
  </div>
  <MainSidebar></MainSidebar>
</template>

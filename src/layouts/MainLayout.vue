>
<script setup lang="ts">
import DesktopCategoryBar from '@/modules/menu/components/category/DesktopCategoryBar.vue'
import MobileCategoryBar from '@/modules/menu/components/category/MobileCategoryBar.vue'
import ContactModal from '@/modules/widgets/contacts/components/ContactModal.vue'
import MainFooter from '@/modules/widgets/footer/MainFooter.vue'
import MainHeader from '@/modules/widgets/header/MainHeader.vue'
import MainSidebar from '@/modules/widgets/sidebar/MainSidebar.vue'
</script>
<template>
  <div class="min-h-screen flex flex-col mx-auto items-center bg-white">
    <MainHeader />
    <MobileCategoryBar class="lg:hidden" />
    <DesktopCategoryBar class="hidden lg:block" />

    <main class="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <router-view />
    </main>
    <MainFooter />
  </div>
  <MainSidebar />
  <ContactModal />
</template>

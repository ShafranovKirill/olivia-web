<script setup lang="ts">
import { computed } from 'vue'
import { useMenuQuery } from '../composables/useMenuQuery'
import CategoryComponent from './product/CategoryComponent.vue'
import MobileCategoryBar from './category/MobileCategoryBar.vue'
import DesktopCategoryBar from './category/DesktopCategoryBar.vue'

const { data: menuData, isLoading, isError } = useMenuQuery()

const menu = computed(() => {
  return menuData.value?.filter((category) => category.products && category.products.length > 0)
})
</script>
<template>
  <MobileCategoryBar class="lg:hidden" />
  <DesktopCategoryBar class="hidden lg:block" />
  <div v-if="isLoading" class="fixed inset-0 flex justify-center items-center">
    <ProgressSpinner></ProgressSpinner>
  </div>
  <div v-else-if="isError">Ошибка при загрузке</div>
  <div v-else class="px-2 sm:px-4">
    <CategoryComponent v-for="category in menu" :key="category.id" :category="category" />
  </div>
</template>

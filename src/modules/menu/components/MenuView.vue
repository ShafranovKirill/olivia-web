<script setup lang="ts">
import { useMenuQuery } from '../composables/useMenuQuery'
import CategoryComponent from './CategoryComponent.vue'

const { data: menuData, isLoading, isError } = useMenuQuery()
</script>
<template>
  <div v-if="isLoading"><ProgressSpinner></ProgressSpinner></div>
  <div v-else-if="isError">Ошибка при загрузке</div>
  <div v-else>
    <CategoryComponent v-for="category in menuData" :key="category.id" :category="category" />
  </div>
</template>

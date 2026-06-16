<script setup lang="ts">
import type { Category } from '../api/menu.service'
import ProductCard from './ProductCard.vue'

defineProps<{ category: Category }>()
</script>
<template>
  <div class="my-4">
    <h2 class="mb-2">{{ category.name }}</h2>
    <div class="grid grid-cols-2 gap-1 justify-items-center">
      <ProductCard
        v-for="product in category.products"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '../api/menu.service'
import ProductCard from './ProductCard.vue'

defineProps<{ category: Category }>()
</script>
<template>
  <div class="my-4">
    <h2 class="mb-2 ml-2 text-3xl font-black text-900">{{ category.name }}</h2>
    <div
      class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-1 sm:gap-2 justify-items-center"
    >
      <ProductCard
        v-for="product in category.products"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

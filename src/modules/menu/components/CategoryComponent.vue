<script setup lang="ts">
import type { Category } from '../api/menu.service'
import ProductCard from './ProductCard.vue'

defineProps<{ category: Category }>()
</script>
<template>
  <Fieldset :legend="category.name">
    <div class="grid">
      <ProductCard
        v-for="product in category.products"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </Fieldset>
</template>

<script setup lang="ts">
import type { Product } from '../api/menu.service'

defineProps<{ product: Product }>()
</script>
<template>
  <Card>
    <template #title>{{ product.name }}</template>
    <template #content>
      <p>{{ product.description }}</p>
      <span>{{ product.price }}</span>
      <span v-if="product.weight">Вес: {{ product.weight }}</span>
    </template>
  </Card>
</template>

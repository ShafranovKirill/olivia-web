<script setup lang="ts">
import type { Product } from '../api/menu.service'

defineProps<{ product: Product }>()
</script>
<template>
  <Card class="w-full h-full shrink-0 grow-0">
    <template #title>{{ product.name }}</template>
    <template #content>
      <img :src="product.image" />
      <p>{{ product.description }}</p>
      <span>{{ product.price }}</span>
      <span v-if="product.weight">Вес: {{ product.weight }}</span>
    </template>
  </Card>
</template>

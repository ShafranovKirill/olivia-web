<script setup lang="ts">
import { computed } from 'vue'
import type { MenuProduct } from '../../api/menu.service'

const props = defineProps<{ product: MenuProduct }>()

const imageUrl = computed(() => {
  return props.product.image || '/product-placeholder/placeholder.svg'
})

const handleImageError = (event: Event) => {
  ;(event.target as HTMLImageElement).src = '/product-placeholder/placeholder.svg'
}
</script>
<template>
  <Card
    class="group w-full h-full shrink-0 grow-0 rounded-4xl! p-2 overflow-hidden hover:cursor-pointer"
  >
    <template #content>
      <img
        :src="imageUrl"
        @error="handleImageError"
        class="w-full mb-2 object-cover aspect-square rounded-4xl block transition-transform duration-500 ease-in-out group-hover:scale-107"
      />
      <div class="flex flex-col items-center gap-2">
        <p class="text-xl font-medium text-center">{{ product.name }}</p>
        <Button class="rounded-4xl! bg-primary py-1.5! px-4!">
          <span class="text-lg font-medium">{{ product.price }} ₽</span>
        </Button>
      </div>
    </template>
  </Card>
</template>

<style scoped>
:deep(.p-card-body) {
  padding: 0 !important;
}
</style>

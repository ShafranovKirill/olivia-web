<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMenuQuery } from '../../composables/useMenuQuery'
import { useMenuStore } from '../../stores/useMenuStore'
import { useMobCatBarScroll } from '../../composables/useMobCatBarScroll'
import { storeToRefs } from 'pinia'

const { data: menu } = useMenuQuery()
const menuStore = useMenuStore()
const categories = computed(() => {
  if (!menu.value) return []

  return menu.value.filter((category) => category.products && category.products.length > 0)
})
const containerRef = ref<HTMLElement | null>(null)
const { isManualScroll, activeCategoryId } = storeToRefs(menuStore)
useMobCatBarScroll(activeCategoryId, containerRef, isManualScroll)
</script>
<template>
  <div class="sticky top-0 p-4 z-50 bg-(--p-surface-50)">
    <div ref="containerRef" class="flex gap-4 overflow-x-auto scrollbar-none">
      <Button
        v-for="category in categories"
        :key="category.id"
        :data-id="category.id"
        class="shrink-0 transition-all duration-200 border-none!"
        @click="menuStore.scrollToCategory(category.id)"
        :severity="menuStore.isActive(category.id) ? 'primary' : 'secondary'"
        :outlined="!menuStore.isActive(category.id)"
        rounded
      >
        {{ category.name }}
      </Button>
    </div>
  </div>
</template>

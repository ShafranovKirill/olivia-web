import { defineStore } from 'pinia'
import type { MenuProduct } from '../api/menu.service'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeCategoryId: null as number | null,
    isManualScroll: false,
    isProductModalOpen: false,
    activeProduct: null as MenuProduct | null,
  }),

  getters: {
    isActive: (state) => (id: number) => state.activeCategoryId === id,
  },

  actions: {
    setActiveCategory(id: number) {
      this.activeCategoryId = id
    },
    async scrollToCategory(categoryId: number) {
      this.isManualScroll = true
      this.activeCategoryId = categoryId

      const element = document.getElementById(`category-${categoryId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }

      await new Promise((resolve) => setTimeout(resolve, 500))

      this.isManualScroll = false
    },

    openProductModal(product: MenuProduct) {
      this.activeProduct = product
      this.isProductModalOpen = true
    },

    closeProductModal() {
      this.activeProduct = null
      this.isProductModalOpen = false
    },
  },
})

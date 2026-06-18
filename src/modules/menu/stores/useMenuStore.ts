import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeCategoryId: null as number | null,
    isManualScroll: false,
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
  },
})

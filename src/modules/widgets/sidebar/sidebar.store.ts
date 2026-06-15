import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebarVisible: true,
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible
    },
    setSidebarVisible(value: boolean) {
      this.isSidebarVisible = value
    },
  },
})

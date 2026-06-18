import { api } from '@/api/client'
import type { paths } from '@/api/types'

type MenuResponse = paths['/api/menu/']['get']['responses']['200']['content']['application/json']
export type MenuCategory = MenuResponse[number]
export type MenuProduct = MenuCategory['products'][number]

type CategoriesResponse =
  paths['/api/menu/categories/']['get']['responses']['200']['content']['application/json']
export type Category = CategoriesResponse[number]

export const MenuService = {
  async getMenu(): Promise<MenuResponse> {
    const { data } = await api.get('/api/menu/')
    return data
  },

  async getCategories(): Promise<CategoriesResponse> {
    const { data } = await api.get('/api/menu/categories')
    return data
  },
}

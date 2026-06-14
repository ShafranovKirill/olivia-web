import { api } from '@/api/client'
import type { paths } from '@/api/types'

type MenuResponse = paths['/api/menu/']['get']['responses']['200']['content']['application/json']

export const MenuService = {
  async getMenu(): Promise<MenuResponse> {
    const { data } = await api.get('/api/menu/')
    return data
  },
}

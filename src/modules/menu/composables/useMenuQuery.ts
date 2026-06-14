import { useQuery } from '@tanstack/vue-query'
import { MenuService } from '../api/menu.service'

export const useMenuQuery = () => {
  return useQuery({
    queryKey: ['menu'],
    queryFn: MenuService.getMenu,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })
}

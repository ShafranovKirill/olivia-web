import { useQuery } from '@tanstack/vue-query'
import { MenuService } from '../api/menu.service'

export const useMenuQuery = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: MenuService.getCategories,
    staleTime: 1000 * 60 * 15,
    retry: 2,
  })
}

import { useQuery } from '@tanstack/react-query';
import { categoriesService } from '../services/categoriesService';

export const useCategories = () => {
  const { isFetching, data } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesService.getAll,
  });

  return { isFetching, categories: data ?? [] };
};

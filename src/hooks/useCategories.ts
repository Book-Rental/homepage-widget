
import { ENDPOINTS } from '../api/api';
import { getCategoryStyle } from '../constants/categoryStyles';
import { QUERY_KEYS } from '../constants/queryKeys';
import { ApiResponse, Category } from '../types/category';
import { useQuery } from '@tanstack/react-query';
const fetchPopularCategories = async (): Promise<Category[]> => {
  const response = await fetch(ENDPOINTS.categories);

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  const result: ApiResponse = await response.json();

  return result.data
    .filter((category) => category.isPopular)
    .map((category) => {
      const { icon, accent } = getCategoryStyle(category.name);
      return {
        id: category._id,
        name: category.name,
        icon,
        accent,
      };
    });
};

export const usePopularCategories = () => {
  return useQuery({
    queryKey: QUERY_KEYS.popularCategories,
    queryFn: fetchPopularCategories,
    staleTime: 5 * 60 * 1000,
  });
};
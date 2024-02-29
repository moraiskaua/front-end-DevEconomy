import { Category } from '../../entities/Category';
import { httpClient } from '../httpClient';

type CategoriesResponse = Array<Category>;

export const getAll = async () => {
  const { data } = await httpClient.get<CategoriesResponse>('/categories');

  return data;
};

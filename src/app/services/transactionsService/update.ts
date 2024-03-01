import { httpClient } from '../httpClient';

export interface UpdateTransactionParams {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: string;
  type: 'INCOME' | 'EXPENSE';
}

export const update = async ({ id, ...params }: UpdateTransactionParams) => {
  const { data } = await httpClient.put(`/transactions/${id}`, params);

  return data;
};

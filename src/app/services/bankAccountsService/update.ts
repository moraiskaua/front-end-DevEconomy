import { httpClient } from '../httpClient';

export interface UpdateBankAccountParams {
  id: string;
  name: string;
  initialBalance: number;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export const update = async ({ id, ...params }: UpdateBankAccountParams) => {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, params);

  return data;
};

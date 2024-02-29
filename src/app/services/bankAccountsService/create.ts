import { httpClient } from '../httpClient';

export interface CreateBankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export const create = async (params: CreateBankAccountParams) => {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
};

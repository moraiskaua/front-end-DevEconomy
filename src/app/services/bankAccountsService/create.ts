import { httpClient } from '../httpClient';

export interface BankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
}

export const create = async (params: BankAccountParams) => {
  const { data } = await httpClient.post('/bank-accounts', params);

  return data;
};

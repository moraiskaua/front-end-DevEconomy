import { httpClient } from '../httpClient';

type BankAccountsResponse = Array<{
  id: string;
  name: string;
  initialBalance: number;
  currentBalance: number;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
  color: string;
}>;

export const getAll = async () => {
  const { data } = await httpClient.get<BankAccountsResponse>('bank-accounts');

  return data;
};

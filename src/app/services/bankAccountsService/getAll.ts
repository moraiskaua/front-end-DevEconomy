import { BankAccount } from '../../entities/BankAccount';
import { httpClient } from '../httpClient';

type BankAccountsResponse = Array<BankAccount>;

export const getAll = async () => {
  const { data } = await httpClient.get<BankAccountsResponse>('bank-accounts');

  return data;
};

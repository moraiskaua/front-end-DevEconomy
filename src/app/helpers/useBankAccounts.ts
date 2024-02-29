import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../services/bankAccountsService';

export const useBankAccounts = () => {
  const { isFetching, data } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll,
  });

  return { isFetching, accounts: data ?? [] };
};

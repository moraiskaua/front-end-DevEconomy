import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../services/bankAccountsService';

export const useBankAccounts = () => {
  const { isFetching, data } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll,
    staleTime: Infinity,
  });

  return { isFetching, accounts: data ?? [] };
};

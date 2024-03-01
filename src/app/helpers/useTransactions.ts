import { useQuery } from '@tanstack/react-query';
import { transactionsService } from '../services/transactionsService';
import { TransactionFilters } from '../services/transactionsService/getAll';

export const useTransactions = (filters: TransactionFilters) => {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll(filters),
  });

  return {
    transactions: data ?? [],
    isFetching,
    isLoading,
    refetchTransactions: refetch,
  };
};

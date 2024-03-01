import { useEffect, useState } from 'react';
import { useDashboard } from '../../../../../app/hooks/useDashboard';
import { useTransactions } from '../../../../../app/helpers/useTransactions';
import { TransactionFilters } from '../../../../../app/services/transactionsService/getAll';

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<TransactionFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const handleChangeFilters =
    <TFilter extends keyof TransactionFilters>(filter: TFilter) =>
    (value: TransactionFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters(prev => ({
        ...prev,
        [filter]: value,
      }));
    };

  const handleOpenFiltersModal = () => setIsFiltersModalOpen(true);
  const handleCloseFiltersModal = () => setIsFiltersModalOpen(false);

  const {
    transactions,
    isFetching,
    isLoading: isInitialLoading,
    refetchTransactions,
  } = useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading: isFetching,
    transactions,
    isFiltersModalOpen,
    filters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
  };
};

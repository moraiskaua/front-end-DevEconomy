import { useEffect, useState } from 'react';
import { useDashboard } from '../../../../../app/hooks/useDashboard';
import { useTransactions } from '../../../../../app/helpers/useTransactions';
import { TransactionFilters } from '../../../../../app/services/transactionsService/getAll';
import { Transaction } from '../../../../../app/entities/Transaction';

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [transactionBeingEdited, setTransactionBeingEdited] =
    useState<Transaction | null>(null);
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

  const handleApplyFilters = ({
    bankAccountId,
    year,
  }: {
    bankAccountId: string | undefined;
    year: number;
  }) => {
    handleChangeFilters('bankAccountId')(bankAccountId);
    handleChangeFilters('year')(year);
    setIsFiltersModalOpen(false);
  };

  const handleOpenFiltersModal = () => setIsFiltersModalOpen(true);
  const handleCloseFiltersModal = () => setIsFiltersModalOpen(false);

  const handleOpenEditModal = (transaction: Transaction) => {
    setIsEditModalOpen(true);
    setTransactionBeingEdited(transaction);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTransactionBeingEdited(null);
  };

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
    transactionBeingEdited,
    isEditModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
    handleApplyFilters,
    handleOpenEditModal,
    handleCloseEditModal,
  };
};

import { useDashboard } from '../../../../../../app/hooks/useDashboard';

export const useNewTransactionModalController = () => {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    handleCloseNewTransactionModal,
  } = useDashboard();

  return {
    isNewTransactionModalOpen,
    newTransactionType,
    handleCloseNewTransactionModal,
  };
};

import { useDashboard } from '../../../../../../app/hooks/useDashboard';

export const useNewAccountModalController = () => {
  const { isNewAccountModalOpen, handleCloseNewAccountModal } = useDashboard();

  return {
    isNewAccountModalOpen,
    handleCloseNewAccountModal,
  };
};

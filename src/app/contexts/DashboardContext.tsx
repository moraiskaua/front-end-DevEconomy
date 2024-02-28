import { ReactNode, createContext, useCallback, useState } from 'react';

interface DashboardContextType {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  handleOpenNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  handleCloseNewTransactionModal: () => void;
  handleOpenNewAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextType);

export const DashboardProvier = ({ children }: { children: ReactNode }) => {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [newTransactionType, setNewTransactionType] = useState<
    'INCOME' | 'EXPENSE' | null
  >(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prev => !prev);
  }, []);

  const handleOpenNewAccountModal = () => setIsNewAccountModalOpen(true);
  const handleCloseNewAccountModal = () => setIsNewAccountModalOpen(false);

  const handleOpenNewTransactionModal = (type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  };

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        isNewTransactionModalOpen,
        newTransactionType,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
        handleOpenNewAccountModal,
        handleCloseNewAccountModal,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

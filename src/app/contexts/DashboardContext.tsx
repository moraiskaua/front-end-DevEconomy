import { ReactNode, createContext, useCallback, useState } from 'react';
import { BankAccount } from '../entities/BankAccount';

interface DashboardContextType {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  isEditAccountModalOpen: boolean;
  accountBeingEdited: BankAccount | null;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
  handleOpenNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  handleCloseNewTransactionModal: () => void;
  handleOpenNewAccountModal: () => void;
  handleOpenEditAccountModal: (bankAccount: BankAccount) => void;
  handleCloseEditAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextType);

export const DashboardProvier = ({ children }: { children: ReactNode }) => {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [accountBeingEdited, setAccountBeingEdited] =
    useState<BankAccount | null>(null);
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

  const handleOpenEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdited(bankAccount);
  }, []);

  const handleCloseEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
    setAccountBeingEdited(null);
  }, []);

  const handleOpenNewTransactionModal = useCallback(
    (type: 'INCOME' | 'EXPENSE') => {
      setNewTransactionType(type);
      setIsNewTransactionModalOpen(true);
    },
    [],
  );

  const handleCloseNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        isNewTransactionModalOpen,
        isEditAccountModalOpen,
        accountBeingEdited,
        newTransactionType,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
        handleOpenEditAccountModal,
        handleCloseEditAccountModal,
        handleOpenNewAccountModal,
        handleCloseNewAccountModal,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

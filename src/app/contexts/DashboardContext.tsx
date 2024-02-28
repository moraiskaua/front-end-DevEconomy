import { ReactNode, createContext, useCallback, useState } from 'react';

interface DashboardContextType {
  areValuesVisible: boolean;
  isNewAccountModalOpen: boolean;
  handleOpenNewAccountModal: () => void;
  handleCloseNewAccountModal: () => void;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextType);

export const DashboardProvier = ({ children }: { children: ReactNode }) => {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prev => !prev);
  }, []);

  const handleOpenNewAccountModal = () => setIsNewAccountModalOpen(true);
  const handleCloseNewAccountModal = () => setIsNewAccountModalOpen(false);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        isNewAccountModalOpen,
        handleOpenNewAccountModal,
        handleCloseNewAccountModal,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

import { ReactNode, createContext, useCallback, useState } from 'react';

interface DashboardContextType {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextType);

export const DashboardProvier = ({ children }: { children: ReactNode }) => {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prev => !prev);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

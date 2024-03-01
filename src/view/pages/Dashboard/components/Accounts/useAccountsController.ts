import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../../../../../app/hooks/useDashboard';
import { useBankAccounts } from '../../../../../app/helpers/useBankAccounts';

export const useAccountsController = () => {
  const windowWidth = useWindowWidth();

  const {
    areValuesVisible,
    toggleValuesVisibility,
    handleOpenNewAccountModal,
  } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  return {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading: false,
    accounts,
    isFetching,
    currentBalance,
    toggleValuesVisibility,
    setSliderState,
    handleOpenNewAccountModal,
  };
};

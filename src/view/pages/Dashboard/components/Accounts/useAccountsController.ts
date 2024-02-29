import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../../../../../app/hooks/useDashboard';
import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../../../../../app/services/bankAccountsService';

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

  const { data = [], isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll,
  });

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, account) => total + account.currentBalance, 0);
  }, [data]);

  return {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading: false,
    accounts: data,
    isFetching,
    currentBalance,
    toggleValuesVisibility,
    setSliderState,
    handleOpenNewAccountModal,
  };
};

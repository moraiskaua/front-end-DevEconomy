import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../../../../../app/hooks/useDashboard';

export const useAccountsController = () => {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading: false,
    accounts: [],
    toggleValuesVisibility,
    setSliderState,
  };
};

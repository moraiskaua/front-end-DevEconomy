import { useDashboard } from '../../../../../app/hooks/useDashboard';

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard();

  return { areValuesVisible };
};

import { useState } from 'react';
import { useBankAccounts } from '../../../../../../app/helpers/useBankAccounts';

export const useFiltersModalController = () => {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | undefined
  >(undefined);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { accounts } = useBankAccounts();

  const handleSelectBankAccount = (bankAccountId: string) => {
    setSelectedBankAccountId(prev =>
      prev === bankAccountId ? undefined : bankAccountId,
    );
  };

  const handleChangeYear = (step: number) =>
    setSelectedYear(prev => prev + step);

  return {
    selectedBankAccountId,
    selectedYear,
    accounts,
    handleSelectBankAccount,
    handleChangeYear,
  };
};

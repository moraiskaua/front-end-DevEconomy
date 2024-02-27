import { useState } from 'react';

export const useFiltersModal = () => {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    string | null
  >(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleSelectBankAccount = (bankAccountId: string) => {
    setSelectedBankAccountId(prev =>
      prev === bankAccountId ? null : bankAccountId,
    );
  };

  const handleChangeYear = (step: number) =>
    setSelectedYear(prev => prev + step);

  return {
    selectedBankAccountId,
    selectedYear,
    handleSelectBankAccount,
    handleChangeYear,
  };
};

import { z } from 'zod';
import { useDashboard } from '../../../../../../app/hooks/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useBankAccounts } from '../../../../../../app/helpers/useBankAccounts';
import { useCategories } from '../../../../../../app/helpers/useCategories';
import { useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionsService } from '../../../../../../app/services/transactionsService';
import { CreateTransactionParams } from '../../../../../../app/services/transactionsService/create';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, 'Nome da transação é obrigatória.'),
  value: z.string().min(1, 'Valor é obrigatório.'),
  categoryId: z.string().min(1, 'Categoria é obrigatório.'),
  bankAccountId: z.string().min(1, 'Conta é obrigatório.'),
  date: z.date(),
});

export const useNewTransactionModalController = () => {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    handleCloseNewTransactionModal,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateTransactionParams) =>
      transactionsService.create(data),
  });

  const categories = useMemo(() => {
    return categoriesList.filter(
      category => category.type === newTransactionType,
    );
  }, [categoriesList, newTransactionType]);

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString(),
      });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!',
      );
      handleCloseNewTransactionModal();
      reset();
    } catch (error) {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar despesa!'
          : 'Erro ao cadastrar receita!',
      );
    }
  });

  return {
    isNewTransactionModalOpen,
    newTransactionType,
    control,
    errors,
    accounts,
    categories,
    isPending,
    register,
    handleCloseNewTransactionModal,
    handleSubmit,
  };
};

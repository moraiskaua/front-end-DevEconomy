import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '../../../../../../app/helpers/useBankAccounts';
import { useCategories } from '../../../../../../app/helpers/useCategories';
import { useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Transaction } from '../../../../../../app/entities/Transaction';
import { UpdateTransactionParams } from '../../../../../../app/services/transactionsService/update';
import { transactionsService } from '../../../../../../app/services/transactionsService';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';
import toast from 'react-hot-toast';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, 'Nome da transação é obrigatória.'),
  value: z.union([z.string().min(1, 'Valor é obrigatório.'), z.number()]),
  categoryId: z.string().min(1, 'Categoria é obrigatório.'),
  bankAccountId: z.string().min(1, 'Conta é obrigatório.'),
  date: z.date(),
});

export const useEditTransactionModalController = (
  transaction: Transaction | null,
  onClose: () => void,
) => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();

  const { isPending, mutateAsync: updateTransaction } = useMutation({
    mutationFn: async (data: UpdateTransactionParams) =>
      transactionsService.update(data),
  });

  const { isPending: isPendingDelete, mutateAsync: removeTransaction } =
    useMutation({
      mutationFn: async (transactionId: string) =>
        transactionsService.remove(transactionId),
    });

  const categories = useMemo(() => {
    return categoriesList.filter(
      category => category.type === transaction?.type,
    );
  }, [categoriesList, transaction]);

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        type: transaction!.type,
        value: currencyStringToNumber(data.value),
        date: data.date.toISOString(),
      });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa editada com sucesso!'
          : 'Receita editada com sucesso!',
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao salvar despesa!'
          : 'Erro ao salvar receita!',
      );
    }
  });

  const handleDeleteTransaction = async () => {
    try {
      await removeTransaction(transaction!.id);
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'despesa excluída com sucesso!'
          : 'receita excluída com sucesso!',
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao excluir despesa!'
          : 'Erro ao excluir receita!',
      );
    }
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return {
    control,
    errors,
    accounts,
    categories,
    isPending,
    isDeleteModalOpen,
    isPendingDelete,
    handleDeleteTransaction,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleSubmit,
    register,
  };
};

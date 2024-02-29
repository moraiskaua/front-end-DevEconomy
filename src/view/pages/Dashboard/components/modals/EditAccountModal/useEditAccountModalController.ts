import { z } from 'zod';
import { useDashboard } from '../../../../../../app/hooks/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { UpdateBankAccountParams } from '../../../../../../app/services/bankAccountsService/update';
import { bankAccountService } from '../../../../../../app/services/bankAccountsService';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';
import { useState } from 'react';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, 'Nome da conta é obrigatório.'),
  initialBalance: z.union([
    z.string().min(1, 'Saldo inicial é obrigatório.'),
    z.number(),
  ]),
  color: z.string().min(1, 'Cor é obrigatória.'),
  type: z.enum(['INVESTMENT', 'CHECKING', 'CASH']),
});

export const useEditAccountModalController = () => {
  const [isDeleteAccountModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDeleteAccount = async () => {
    try {
      await removeAccount(accountBeingEdited!.id);
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta excluída com sucesso!');
      handleCloseEditAccountModal();
    } catch {
      toast.error('Erro ao excluir conta!');
    }
  };

  const {
    isEditAccountModalOpen,
    handleCloseEditAccountModal,
    accountBeingEdited,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: accountBeingEdited?.color,
      name: accountBeingEdited?.name,
      initialBalance: accountBeingEdited?.initialBalance,
      type: accountBeingEdited?.type,
    },
  });

  const queryClient = useQueryClient();
  const { isPending, mutateAsync: updateAccount } = useMutation({
    mutationFn: async (data: UpdateBankAccountParams) =>
      bankAccountService.update(data),
  });

  const { isPending: isPendingDelete, mutateAsync: removeAccount } =
    useMutation({
      mutationFn: async (bankAccountId: string) =>
        bankAccountService.remove(bankAccountId),
    });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await updateAccount({
        ...data,
        id: accountBeingEdited!.id,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta editada com sucesso!');
      handleCloseEditAccountModal();
    } catch {
      toast.error('Erro ao salvar alterações!');
    }
  });

  return {
    isEditAccountModalOpen,
    errors,
    control,
    isPending,
    isDeleteAccountModalOpen,
    isPendingDelete,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    register,
    handleSubmit,
    handleCloseEditAccountModal,
    handleDeleteAccount,
  };
};

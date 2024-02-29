import { z } from 'zod';
import { useDashboard } from '../../../../../../app/hooks/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { bankAccountService } from '../../../../../../app/services/bankAccountsService';
import { BankAccountParams } from '../../../../../../app/services/bankAccountsService/create';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, 'Nome da conta é obrigatório'),
  initialBalance: z.string().min(1, 'Saldo inicial é obrigatório'),
  color: z.string().min(1, 'Cor é obrigatória'),
  type: z.enum(['INVESTMENT', 'CHECKING', 'CASH']),
});

export const useNewAccountModalController = () => {
  const { isNewAccountModalOpen, handleCloseNewAccountModal } = useDashboard();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: BankAccountParams) =>
      bankAccountService.create(data),
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
      });
      toast.success('Conta cadastrada com sucesso!');
      handleCloseNewAccountModal();
      reset();
    } catch {
      toast.error('Erro ao cadastrar conta!');
    }
  });

  return {
    isNewAccountModalOpen,
    errors,
    control,
    isPending,
    register,
    handleCloseNewAccountModal,
    handleSubmit,
  };
};

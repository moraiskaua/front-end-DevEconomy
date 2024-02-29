import { z } from 'zod';
import { useDashboard } from '../../../../../../app/hooks/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useBankAccounts } from '../../../../../../app/helpers/useBankAccounts';

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

  const { accounts } = useBankAccounts();

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      console.log(data);
    } catch (error) {
      toast.error('Algo de errado!');
    }
  });

  return {
    isNewTransactionModalOpen,
    newTransactionType,
    control,
    errors,
    accounts,
    register,
    handleCloseNewTransactionModal,
    handleSubmit,
  };
};

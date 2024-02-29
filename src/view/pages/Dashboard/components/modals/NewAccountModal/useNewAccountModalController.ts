import { z } from 'zod';
import { useDashboard } from '../../../../../../app/hooks/useDashboard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      console.log(data);
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!');
    }
  });

  return {
    isNewAccountModalOpen,
    errors,
    control,
    register,
    handleCloseNewAccountModal,
    handleSubmit,
  };
};

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authService } from '../../../app/services/authService';
import { useMutation } from '@tanstack/react-query';
import { SignupParams } from '../../../app/services/authService/signup';
import toast from 'react-hot-toast';
import { useAuth } from '../../../app/hooks/useAuth';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  email: z
    .string()
    .min(1, 'E-mail é obrigatório.')
    .email('Digite um e-mail válido.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
});

export const useRegisterController = () => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async data => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!');
    }
  });

  return { handleSubmit, register, errors, isPending };
};

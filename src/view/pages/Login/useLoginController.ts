import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { httpClient } from '../../../app/services/httpClient';
import { authService } from '../../../app/services/authService';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório.')
    .email('Digite um e-mail válido.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
});

export const useLoginController = () => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async data => {
    //
  });

  return { handleSubmit, register, errors };
};

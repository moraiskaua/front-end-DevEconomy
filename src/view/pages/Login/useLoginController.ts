import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório.').email(),
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

  const handleSubmit = hookFormHandleSubmit(data => {
    const result = schema.safeParse(data);

    console.log(result);
  });

  return { handleSubmit, register, errors };
};

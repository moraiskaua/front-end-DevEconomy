import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useRegisterController } from './useRegisterController';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const { register, handleSubmit, errors, isPending } = useRegisterController();

  return (
    <div className="w-full">
      <header className="flex flex-col items-center text-center">
        <img src="/favicon.png" className="size-36 md:size-52" />
        <h1 className="text-2xl font-bold text-gray-900  tracking-[-1px]">
          Crie sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.05px]">
            Já possui uma conta?
          </span>{' '}
          <Link
            to="/login"
            className="tracking-[-0.05px] font-medium text-teal-900"
          >
            Fazer login
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" className="mt-2" isLoading={isPending}>
          Criar conta
        </Button>
      </form>
    </div>
  );
};

export default Register;

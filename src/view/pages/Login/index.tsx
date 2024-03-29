import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useLoginController } from './useLoginController';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <div className="w-full">
      <header className="flex flex-col items-center text-center">
        <img src="/favicon.png" className="size-36 md:size-52" />
        <h1 className="text-2xl font-bold text-gray-900  tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.05px]">
            Novo por aqui?
          </span>{' '}
          <Link
            to="/register"
            className="tracking-[-0.05px] font-medium text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
        />

        <Button type="submit" className="mt-2" isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;

import { Link } from 'react-router-dom';
import Input from '../components/Input';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <div className="w-full">
      <header className="flex flex-col items-center gap-4">
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

      <form className="mt-[60px] flex flex-col gap-4">
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <button type="submit" className="mt-2">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;

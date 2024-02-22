import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <div className="w-full">
      <header className="flex flex-col items-center gap-4 text-center">
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

      <form className="mt-[60px] flex flex-col gap-4">
        <Input placeholder="Nome" name="name" />
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  );
};

export default Register;

import { Outlet } from 'react-router-dom';
import illustration from '../../assets/illustration.png';

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = ({}) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <div className="w-full h-full max-w-[504px] flex justify-center items-center p-8">
          <Outlet />
        </div>
      </div>

      <div className="hidden w-1/2 h-full lg:flex justify-center items-center p-8 relative">
        <img
          src={illustration}
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-b-[32px]"
        />

        <div className="max-w-[656px] bottom-8 bg-white p-10 rounded-b-[32px] absolute">
          <p className="text-gray-700 font-medium text-xl">
            Gerencia sua finanças pessoais com o DevEconomy, e o melhor,
            totalmente de graça.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

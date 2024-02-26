import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { EyeIcon } from '../../../components/icons/EyeIcon';
import AccountCard from './AccountCard';

interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = ({}) => {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div className="text-white">
        <span className="tracking-[-0.5px] block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px]">R$ 1000,67</strong>

          <button className="flex justify-center items-center size-8">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <strong className="text-white tracking-[-1px] text-lg font-bold">
            Minhas contas
          </strong>

          <div>
            <button className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
              <ChevronLeftIcon className="size-6 text-white" />
            </button>
            <button className="p-3  rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
              <ChevronRightIcon className="size-6 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <AccountCard
            color="orange"
            name="Inter"
            balance={321.72}
            type="CHECKING"
          />
        </div>
      </div>
    </div>
  );
};

export default Accounts;

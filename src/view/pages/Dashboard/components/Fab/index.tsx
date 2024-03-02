import { PlusIcon } from '@radix-ui/react-icons';
import DropdownMenu from '../../../../components/DropdownMenu';
import { Expense } from '../../../../components/icons/categories/expense/Expense';
import { Income } from '../../../../components/icons/categories/income/Income';
import { BankAccountIcon } from '../../../../components/icons/BankAccountIcon';
import { useDashboard } from '../../../../../app/hooks/useDashboard';

interface FabProps {}

const Fab: React.FC<FabProps> = ({}) => {
  const { handleOpenNewAccountModal, handleOpenNewTransactionModal } =
    useDashboard();

  return (
    <div className="fixed right-4 bottom-4 z-20">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="bg-teal-900 size-12 flex justify-center items-center rounded-full text-white">
            <PlusIcon className="size-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="mr-5 mb-2">
          <DropdownMenu.Item
            className="gap-2"
            onSelect={() => handleOpenNewTransactionModal('EXPENSE')}
          >
            <Expense />
            Nova Despesa
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="gap-2"
            onSelect={() => handleOpenNewTransactionModal('INCOME')}
          >
            <Income /> Nova Receita
          </DropdownMenu.Item>

          <DropdownMenu.Item
            className="gap-2"
            onSelect={handleOpenNewAccountModal}
          >
            <BankAccountIcon /> Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Fab;

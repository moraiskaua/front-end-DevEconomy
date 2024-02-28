import Button from '../../../../../components/Button';
import ColorsDropdown from '../../../../../components/ColorsDropdown';
import DatePickerInput from '../../../../../components/DatePickerInput';
import Input from '../../../../../components/Input';
import InputCurrency from '../../../../../components/InputCurrency';
import Modal from '../../../../../components/Modal';
import Select from '../../../../../components/Select';
import { useNewTransactionModalController } from './useNewTransactionModalController';

interface NewTransactionModalProps {}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({}) => {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    handleCloseNewTransactionModal,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={handleCloseNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
          />
          <Select
            placeholder="Categoria"
            options={[
              { label: 'Conta corrente', value: 'CHECKING' },
              { label: 'Investimentos', value: 'INVESTMENT' },
              { label: 'Dinheiro físico', value: 'CASH' },
            ]}
          />
          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            options={[
              { label: 'Conta corrente', value: 'CHECKING' },
              { label: 'Investimentos', value: 'INVESTMENT' },
              { label: 'Dinheiro físico', value: 'CASH' },
            ]}
          />
          <DatePickerInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
};

export default NewTransactionModal;

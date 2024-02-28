import Input from '../../../../../components/Input';
import InputCurrency from '../../../../../components/InputCurrency';
import Modal from '../../../../../components/Modal';
import Select from '../../../../../components/Select';
import { useNewAccountModalController } from './useNewAccountModalController';

interface NewAccountModalProps {}

const NewAccountModal: React.FC<NewAccountModalProps> = ({}) => {
  const { isNewAccountModalOpen, handleCloseNewAccountModal } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={handleCloseNewAccountModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da conta" />
          <Select
            placeholder="Tipo"
            options={[
              { label: 'Conta corrente', value: 'CHECKING' },
              { label: 'Investimentos', value: 'INVESTMENT' },
              { label: 'Dinheiro físico', value: 'CASH' },
            ]}
          />
        </div>
      </form>
    </Modal>
  );
};

export default NewAccountModal;

import { Controller } from 'react-hook-form';
import Button from '../../../../../components/Button';
import ColorsDropdown from '../../../../../components/ColorsDropdown';
import Input from '../../../../../components/Input';
import InputCurrency from '../../../../../components/InputCurrency';
import Modal from '../../../../../components/Modal';
import Select from '../../../../../components/Select';
import { useNewAccountModalController } from './useNewAccountModalController';

interface NewAccountModalProps {}

const NewAccountModal: React.FC<NewAccountModalProps> = ({}) => {
  const {
    isNewAccountModalOpen,
    isPending,
    control,
    errors,
    handleCloseNewAccountModal,
    register,
    handleSubmit,
  } = useNewAccountModalController();

  return (
    <Modal title="Nova conta" open={true} onClose={handleCloseNewAccountModal}>
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Saldo inicial
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            {...register('name')}
            placeholder="Nome da conta"
            error={errors.name?.message}
          />
          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                error={errors.type?.message}
                onChange={onChange}
                value={value}
                options={[
                  { label: 'Conta corrente', value: 'CHECKING' },
                  { label: 'Investimentos', value: 'INVESTMENT' },
                  { label: 'Dinheiro físico', value: 'CASH' },
                ]}
              />
            )}
          />
          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropdown
                error={errors.color?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        <Button type="submit" className="w-full mt-6" isLoading={isPending}>
          Criar
        </Button>
      </form>
    </Modal>
  );
};

export default NewAccountModal;

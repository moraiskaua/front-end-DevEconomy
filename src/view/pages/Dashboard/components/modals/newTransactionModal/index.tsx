import { Controller } from 'react-hook-form';
import Button from '../../../../../components/Button';
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
    control,
    errors,
    accounts,
    categories,
    isPending,
    register,
    handleSubmit,
    handleCloseNewTransactionModal,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={handleCloseNewTransactionModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            {...register('name')}
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
            error={errors.name?.message}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Categoria"
                options={categories.map(category => ({
                  value: category.id,
                  label: category.name,
                }))}
                onChange={onChange}
                value={value}
                error={errors.categoryId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                options={accounts.map(account => ({
                  value: account.id,
                  label: account.name,
                }))}
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                error={errors.date?.message}
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

export default NewTransactionModal;

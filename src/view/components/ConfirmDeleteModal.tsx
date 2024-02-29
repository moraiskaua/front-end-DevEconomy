import Button from './Button';
import Modal from './Modal';
import { TrashIcon } from './icons/TrashIcon';

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  description?: string;
  isLoading: boolean;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  title,
  description,
  isLoading,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal open onClose={onClose} title="Excluir">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="size-[52px] bg-red-50 flex justify-center items-center rounded-full">
          <TrashIcon className="size-6 text-red-900" />
        </div>

        <p className="w-[180px] text-gray-800 tracking-[-0.5px] font-bold">
          {title}
        </p>

        {description && (
          <p className="text-gray-800 tracking-[-0.5px]">{description}</p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="danger"
          onClick={onConfirm}
          isLoading={isLoading}
        >
          Excluir
        </Button>
        <Button
          className="w-full"
          variant="ghost"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;

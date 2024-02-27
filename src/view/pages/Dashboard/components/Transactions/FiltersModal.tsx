import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const FiltersModal: React.FC<FiltersModalProps> = ({ open, onClose }) => {
  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Conta
        </span>

        <div className="space-y-2">
          <button className="p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors">
            ...
          </button>
        </div>
      </div>

      <div className="mt-10">
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Ano
        </span>

        <div className="mt-2 w-52 text-gray-800 flex justify-center items-center">
          <button className="size-12 flex justify-center items-center">
            <ChevronLeftIcon className="size-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">2022</span>
          </div>

          <button className="size-12 flex jutify-center items-center">
            <ChevronRightIcon className="size-6" />
          </button>
        </div>
      </div>

      <Button className="w-full mt-10">Aplicar filtros</Button>
    </Modal>
  );
};

export default FiltersModal;

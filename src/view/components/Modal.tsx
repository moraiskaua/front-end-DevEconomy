import * as RdxDialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';
import { ReactNode } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  title: string;
  rightAction?: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  rightAction,
  children,
  onClose,
}) => {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn('fixed inset-0 bg-black/80 backdrop-blur-sm z-50')}
        />

        <RdxDialog.Content className="outline-none fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px]">
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              className="size-12 outline-none flex justify-center items-center"
              onClick={onClose}
            >
              <Cross2Icon className="size-6" />
            </button>

            <span className="text-lg font-bold tracking-[-1px]">{title}</span>
            <div className="size-12 flex justify-center items-center">
              {rightAction}
            </div>
          </header>

          <div>{children}</div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
};

export default Modal;

import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface RdxDropDownMenuProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
  asChild?: boolean;
}

const DropdownMenuRoot: React.FC<RdxDropDownMenuProps> = ({ children }) => {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
};

const DropdownMenuTrigger: React.FC<RdxDropDownMenuProps> = ({
  children,
  asChild,
}) => {
  return (
    <RdxDropdownMenu.Trigger className="outline-none" asChild={asChild}>
      {children}
    </RdxDropdownMenu.Trigger>
  );
};

const DropdownMenuContent: React.FC<RdxDropDownMenuProps> = ({
  children,
  className,
}) => {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'bg-white rounded-2xl p-2 space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[90]',
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
};

const DropdownMenuItem: React.FC<RdxDropDownMenuProps> = ({
  children,
  className,
  onSelect,
}) => {
  return (
    <RdxDropdownMenu.Item
      className={cn(
        'min-h-[40px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className,
      )}
      onSelect={onSelect}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
};

export default {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};

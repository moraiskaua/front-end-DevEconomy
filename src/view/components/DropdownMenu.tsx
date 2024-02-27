import * as RdxDropDownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface RdxDropDownMenuProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
}

const DropdownMenuRoot: React.FC<RdxDropDownMenuProps> = ({ children }) => {
  return <RdxDropDownMenu.Root>{children}</RdxDropDownMenu.Root>;
};

const DropdownMenuTrigger: React.FC<RdxDropDownMenuProps> = ({ children }) => {
  return (
    <RdxDropDownMenu.Trigger className="outline-none">
      {children}
    </RdxDropDownMenu.Trigger>
  );
};

const DropdownMenuContent: React.FC<RdxDropDownMenuProps> = ({
  children,
  className,
}) => {
  return (
    <RdxDropDownMenu.Portal>
      <RdxDropDownMenu.Content
        className={cn(
          'bg-white rounded-2xl p-2 space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          className,
        )}
      >
        {children}
      </RdxDropDownMenu.Content>
    </RdxDropDownMenu.Portal>
  );
};

const DropdownMenuItem: React.FC<RdxDropDownMenuProps> = ({
  children,
  className,
  onSelect,
}) => {
  return (
    <RdxDropDownMenu.Item
      className={cn(
        'min-h-12 outline-none flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className,
      )}
      onSelect={onSelect}
    >
      {children}
    </RdxDropDownMenu.Item>
  );
};

export default {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};

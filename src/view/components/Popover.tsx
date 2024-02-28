import * as RdxPopover from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface RdxPopoverProps {
  children: ReactNode;
  className?: string;
  onSelect?: () => void;
  asChild?: boolean;
}

const PopoverRoot: React.FC<RdxPopoverProps> = ({ children }) => {
  return <RdxPopover.Root>{children}</RdxPopover.Root>;
};

const PopoverTrigger: React.FC<RdxPopoverProps> = ({ children, asChild }) => {
  return <RdxPopover.Trigger asChild={asChild}>{children}</RdxPopover.Trigger>;
};

const PopoverContent: React.FC<RdxPopoverProps> = ({ children, className }) => {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'bg-white rounded-2xl p-4 space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[90]',
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
};

export default {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};

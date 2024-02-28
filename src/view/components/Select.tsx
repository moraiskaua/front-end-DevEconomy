import * as RdxSelect from '@radix-ui/react-select';
import { cn } from '../../app/utils/cn';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = ({
  className,
  error,
  options,
  placeholder,
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            'absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none',
            selectedValue &&
              'text-xs left-[13px] top-2 transition-all translate-y-0',
          )}
        >
          {placeholder}
        </label>
        <RdxSelect.Root onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              'outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full text-left relative flex items-center pt-4',
              error && 'border-red-900',
              className,
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon>
              <ChevronDownIcon className="size-6 absolute right-3 top-1/2 -translate-y-1/2" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[52] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
              <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800">
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-2">
                {options.map(option => (
                  <RdxSelect.Item
                    key={option.value}
                    value={option.value}
                    className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 outline-none rounded-xl transition-colors cursor-pointer"
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800">
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default Select;
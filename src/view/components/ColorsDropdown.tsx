import { ChevronDownIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
import DropdownMenu from './DropdownMenu';
import { COLORS, Color } from '../../app/config/constants';
import { ColorIcon } from './icons/ColorIcon';
import { useState } from 'react';

interface ColorsDropdownProps {
  className?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorsDropdown: React.FC<ColorsDropdownProps> = ({
  className,
  error,
  value,
  onChange,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(() => {
    if (!value) return null;

    return COLORS.find(c => c.color === value) ?? null;
  });

  const handleSelectColor = (color: Color) => {
    setSelectedColor(color);
    onChange?.(color.color);
  };

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={cn(
              'outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 w-full text-left relative flex items-center',
              error && 'border-red-900',
              className,
            )}
          >
            Cor
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {selectedColor ? (
                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              ) : (
                <ChevronDownIcon className="size-6 text-gray-800" />
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4">
          {COLORS.map(item => (
            <DropdownMenu.Item
              key={item.color}
              onSelect={() => handleSelectColor(item)}
            >
              <ColorIcon color={item.color} bg={item.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default ColorsDropdown;

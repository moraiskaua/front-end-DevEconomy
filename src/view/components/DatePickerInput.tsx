import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
import { useState } from 'react';
import { formatDate } from '../../app/utils/formatDate';
import Popover from './Popover';

interface DatePickerInputProps {
  className?: string;
  error?: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  className,
  error,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type="button"
            className={cn(
              'outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 w-full text-left relative flex items-center pt-4',
              error && 'border-red-900',
              className,
            )}
          >
            <span className="absolute text-gray-700 text-xs left-[13px] top-2 pointer-events-none">
              Data
            </span>
            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>
      </Popover.Root>

      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
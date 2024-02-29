import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';
import { cn } from '../../app/utils/cn';

interface InputCurrencyProps {
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  error,
  value,
  onChange,
}) => {
  return (
    <div>
      <NumericFormat
        className={cn(
          'w-full text-gray-900 text-[32px] font-bold tracking-[-1px] outline-none',
          error && 'text-red-900',
        )}
        decimalSeparator=","
        decimalScale={2}
        onChange={e => onChange?.(e.target.value)}
        value={value}
      />

      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputCurrency;

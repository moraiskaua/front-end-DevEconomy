import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          id={name}
          name={id ?? name}
          placeholder=" "
          className={cn(
            'outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full pt-4 peer placeholder-shown:pt-0',
            error && 'border-red-900',
            className,
          )}
        />

        <label
          htmlFor={id ?? name}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

export default Input;

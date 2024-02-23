import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          id={name}
          name={id ?? name}
          className="outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full pt-4 peer placeholder-shown:pt-0 focus:border-gray-900"
          placeholder=" "
          {...props}
        />

        <label
          htmlFor={id ?? name}
          className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);

export default Input;

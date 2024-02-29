import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  disabled,
  children,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all',
        variant === 'danger' && 'bg-red-900 hover:bg-red-800',
        variant === 'ghost' &&
          'bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800/10 disabled:border-none',
        className,
      )}
    >
      {!isLoading ? children : <Spinner className="size-6" />}
    </button>
  );
};

export default Button;

import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all',
        className,
      )}
    />
  );
};

export default Button;

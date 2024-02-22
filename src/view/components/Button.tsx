import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all"
    />
  );
};

export default Button;

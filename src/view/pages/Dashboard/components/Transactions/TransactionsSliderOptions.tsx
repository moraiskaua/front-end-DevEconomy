import { useSwiper } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';

interface TransactionsSliderOptionsProps {
  month: string;
  isActive: boolean;
  index: number;
}

const TransactionsSliderOptions: React.FC<TransactionsSliderOptionsProps> = ({
  isActive,
  month,
  index,
}) => {
  const swiper = useSwiper();

  return (
    <button
      className={cn(
        'w-full h-12 rounded-full text-sm text-gray-800 tracking-[-0.5px] font-medium',
        isActive && 'bg-white',
      )}
      onClick={() => swiper.slideTo(index)}
    >
      {month}
    </button>
  );
};

export default TransactionsSliderOptions;

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface TransactionsSliderNavigationProps {}

const TransactionsSliderNavigation: React.FC<
  TransactionsSliderNavigationProps
> = ({}) => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center z-10 bg-gradient-to-r from-gray-100 to-transparent"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="size-6 text-gray-800" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 size-12 flex justify-center items-center z-10 bg-gradient-to-l from-gray-100 to-transparent"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="size-6 text-gray-800" />
      </button>
    </>
  );
};

export default TransactionsSliderNavigation;

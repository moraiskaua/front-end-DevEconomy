import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountsSliderNavigationProps {}

const AccountsSliderNavigation: React.FC<
  AccountsSliderNavigationProps
> = ({}) => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="size-6 text-white" />
      </button>
      <button
        className="p-3  rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="size-6 text-white" />
      </button>
    </div>
  );
};

export default AccountsSliderNavigation;

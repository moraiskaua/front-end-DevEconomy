import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import TransactionsSliderOptions from './TransactionsSliderOptions';
import TransactionsSliderNavigation from './TransactionsSliderNavigation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { cn } from '../../../../../app/utils/cn';

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = ({}) => {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <header>
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper slidesPerView={3} centeredSlides>
            <TransactionsSliderNavigation />

            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <TransactionsSliderOptions
                    month={month}
                    isActive={isActive}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex justify-between items-center gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="expense" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Almoço
              </strong>
              <span className="text-sm text-gray-600">27/02/2024</span>
            </div>
          </div>

          <span className={cn('tracking-[-0.5px] font-medium')}>
            {formatCurrency(782.9)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import TransactionsSliderOptions from './TransactionsSliderOptions';
import TransactionsSliderNavigation from './TransactionsSliderNavigation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { cn } from '../../../../../app/utils/cn';
import { useTransactionsController } from './useTransactionsController';
import { Spinner } from '../../../../components/Spinner';
import EmptyStateImage from '../../../../../assets/empty-state.svg';
import TransactionTypeDropdown from './TransactionTypeDropdown';
import FiltersModal from './FiltersModal';
import { formatDate } from '../../../../../app/utils/formatDate';

interface TransactionsProps {}

const Transactions: React.FC<TransactionsProps> = ({}) => {
  const {
    areValuesVisible,
    isLoading,
    isInitialLoading,
    transactions,
    isFiltersModalOpen,
    filters,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
  } = useTransactionsController();

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {!isInitialLoading ? (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />

          <header>
            <div className="flex justify-between items-center">
              <TransactionTypeDropdown
                onSelect={handleChangeFilters('type')}
                selectedType={filters.type}
              />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper
                slidesPerView={3}
                centeredSlides
                initialSlide={filters.month}
                onSlideChange={swiper =>
                  handleChangeFilters('month')(swiper.realIndex)
                }
              >
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
            {transactions.length > 0 && !isLoading ? (
              <>
                {transactions.map(transaction => (
                  <div
                    key={transaction.id}
                    className="bg-white p-4 rounded-2xl flex justify-between items-center gap-4"
                  >
                    <div className="flex-1 flex items-center gap-3">
                      <CategoryIcon
                        type={
                          transaction.type === 'EXPENSE' ? 'expense' : 'income'
                        }
                        category={transaction.category?.icon}
                      />

                      <div>
                        <strong className="font-bold tracking-[-0.5px] block">
                          {transaction.name}
                        </strong>
                        <span className="text-sm text-gray-600">
                          {formatDate(new Date(transaction.date))}
                        </span>
                      </div>
                    </div>

                    <span
                      className={cn(
                        'tracking-[-0.5px] font-medium',
                        !areValuesVisible && 'blur-sm',
                        transaction.type === 'EXPENSE'
                          ? 'text-red-800'
                          : 'text-green-800',
                      )}
                    >
                      {transaction.type === 'EXPENSE' ? '-' : '+'}
                      {formatCurrency(transaction.value)}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                {isLoading && <Spinner />}

                {!isLoading && transactions.length === 0 && (
                  <>
                    <img src={EmptyStateImage} className="" />
                    <p className="text-gray-700">
                      Não encontramos nenhum transação!
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="size-10" />
        </div>
      )}
    </div>
  );
};

export default Transactions;

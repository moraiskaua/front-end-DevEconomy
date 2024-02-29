import { PlusIcon } from '@radix-ui/react-icons';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import AccountCard from './AccountCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AccountsSliderNavigation from './AccountsSliderNavigation';
import { useAccountsController } from './useAccountsController';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { cn } from '../../../../../app/utils/cn';
import { Spinner } from '../../../../components/Spinner';

interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = ({}) => {
  const {
    windowWidth,
    sliderState,
    areValuesVisible,
    isLoading,
    accounts,
    setSliderState,
    toggleValuesVisibility,
    handleOpenNewAccountModal,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {!isLoading ? (
        <>
          <div className="text-white">
            <span className="tracking-[-0.5px] block">Saldo total</span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px]',
                  !areValuesVisible && 'blur-md',
                )}
              >
                {formatCurrency(832.9)}
              </strong>

              <button
                className="flex justify-center items-center size-8"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            {accounts.length > 0 ? (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                  onSlideChange={swiper =>
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    })
                  }
                >
                  <div
                    className="flex items-center justify-between mb-4"
                    slot="container-start"
                  >
                    <strong className="text-white tracking-[-1px] text-lg font-bold">
                      Minhas contas
                    </strong>

                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>

                  {accounts.map(account => (
                    <SwiperSlide key={account.id}>
                      <AccountCard
                        color={account.color}
                        name={account.name}
                        balance={account.currentBalance}
                        type={account.type}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <>
                <div className="flex flex-col">
                  <strong className="text-white tracking-[-1px] text-lg font-bold">
                    Minhas contas
                  </strong>

                  <button
                    className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col justify-center items-center gap-4 text-white"
                    onClick={handleOpenNewAccountModal}
                  >
                    <div className="size-11 rounded-full border-2 border-dashed border-white flex justify-center items-center">
                      <PlusIcon className="size-6" />
                    </div>

                    <span className="font-medium tracking-[-0.5px] block w-32 text-center">
                      Cadastre uma nova conta
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="text-teal-950/50 fill-white size-10" />
        </div>
      )}
    </div>
  );
};

export default Accounts;

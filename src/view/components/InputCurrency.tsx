import { NumericFormat } from 'react-number-format';

interface InputCurrencyProps {}

const InputCurrency: React.FC<InputCurrencyProps> = ({}) => {
  return (
    <NumericFormat
      className="w-full text-gray-900 text-[32px] font-bold tracking-[-1px] outline-none"
      thousandSeparator="."
      decimalSeparator=","
      defaultValue="0"
    />
  );
};

export default InputCurrency;

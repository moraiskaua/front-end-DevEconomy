export const currencyStringToNumber = (value: string) => {
  return Number(value.replace(/\./g, '').replace(',', '.'));
};

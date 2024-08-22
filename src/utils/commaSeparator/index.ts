import { toPersianNumber } from "..";

export const commaSeparator = (number: number | string) => {
  return toPersianNumber(
    number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
};

import { useState } from "react";
import { Currencies } from "~/types/markets";

export const usePaginate = (currencies?: Currencies[]) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  const lengthOfCurrencies = currencies?.length || 0;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = currencies?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(lengthOfCurrencies / itemsPerPage);

  // Invoke when user click to request another page.
  const onChangePage = (event) => {
    const newOffset = (event.selected * itemsPerPage) % lengthOfCurrencies;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return { onChangePage, itemsPerPage, currentItems, pageCount };
};

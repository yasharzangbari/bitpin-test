import { useEffect, useMemo, useState } from "react";
import { Currencies } from "~/types/markets";
import { useQueryParams } from "..";

export const usePaginate = (currencies?: Currencies[]) => {
  const { queryParam, setQuery } = useQueryParams();
  const itemsPerPage = 20;
  const lengthOfCurrencies = currencies?.length || 0;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = currencies?.slice(itemOffset, endOffset) || [];

  useEffect(() => {
    const currentPage = queryParam.get("page");

    if (currentPage !== null) {
      const currentOffset = (+currentPage * itemsPerPage) % lengthOfCurrencies;

      setItemOffset(currentOffset);
    }
  }, [currencies]);

  const pageCount = Math.ceil(lengthOfCurrencies / itemsPerPage);

  const onChangePage = (page: number) => {
    const newOffset = (page * itemsPerPage) % lengthOfCurrencies;

    setQuery("page", page.toString());

    setItemOffset(newOffset);
  };

  return { onChangePage, itemsPerPage, currentItems, pageCount };
};

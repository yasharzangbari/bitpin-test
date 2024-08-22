import { useEffect, useMemo, useState } from "react";
import { Result } from "~/types/markets";
import { useQueryParams } from "..";

export const usePaginate = (currencies?: Result[]) => {
  const { queryParam, setQuery } = useQueryParams();
  const itemsPerPage = 20;
  const totalItems = currencies?.length || 0;

  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = useMemo(
    () => currencies?.slice(itemOffset, itemOffset + itemsPerPage) || [],
    [currencies, itemOffset, itemsPerPage]
  );

  useEffect(() => {
    const currentPage = queryParam.get("page");
    if (currentPage) {
      const page = Math.max(1, parseInt(currentPage, 10));
      const newOffset = (page - 1) * itemsPerPage;
      setItemOffset(newOffset % totalItems);
    }
  }, [queryParam]);

  const pageCount = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const onChangePage = (page: number) => {
    const newOffset = (page - 1) * itemsPerPage;
    setQuery("page", `${page}`);
    setItemOffset(newOffset % totalItems);
  };

  return { onChangePage, itemsPerPage, currentItems, pageCount };
};

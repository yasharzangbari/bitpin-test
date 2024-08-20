import React, { useMemo } from "react";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { useRequest } from "~/hooks/useRequest";
import { endpoints } from "~/lib/api/endpoints";
import * as Styled from "./index.styled";
import { Markets } from "~/types/markets";
import { CurrencyList } from "~/components";
import ReactPaginate from "react-paginate";
import { usePaginate } from "~/hooks/usePaginate";
import { useCurrencies } from "~/hooks/useCurrencies";

const HomePage = () => {
  const { result, isLoading, currencyType } = useCurrencies();

  const { onChangePage, itemsPerPage, currentItems } = usePaginate(result);

  if (isLoading) return <div>loading...</div>;
  return (
    <Styled.HomeContainer>
      <CurrencyList currencies={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onChangePage}
        pageRangeDisplayed={itemsPerPage}
        pageCount={itemsPerPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Styled.HomeContainer>
  );
};

export default HomePage;

import React, { useMemo } from "react";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { useRequest } from "~/hooks/useRequest";
import { endpoints } from "~/lib/api/endpoints";
import * as Styled from "./index.styled";
import { Markets } from "~/types/markets";
import { CurrencyList, Pagination } from "~/components";
import { usePaginate } from "~/hooks/usePaginate";
import { useCurrencies } from "~/hooks/useCurrencies";

const HomePage = () => {
  const { result, isLoading, currencyType } = useCurrencies();

  const { onChangePage, itemsPerPage, currentItems } = usePaginate(result);

  if (isLoading) return <div>loading...</div>;
  return (
    <Styled.HomeContainer>
      <CurrencyList currencies={currentItems} />
      <Pagination
        length={result?.length}
        itemsPerPage={itemsPerPage}
        onChangePage={onChangePage}
      />
    </Styled.HomeContainer>
  );
};

export default HomePage;

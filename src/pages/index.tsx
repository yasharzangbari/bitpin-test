import React from "react";
import * as Styled from "~/styles/home.styled";
import { CurrencyList, Pagination } from "~/components";
import { usePaginate } from "~/hooks/usePaginate";
import { useCurrencies } from "~/hooks/useCurrencies";

const HomePage = () => {
  const { result, isLoading } = useCurrencies();

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

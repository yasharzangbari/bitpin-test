import React, { FC } from "react";
import { Button } from "~/components";
import { BUTTON_SIZE } from "../button/button.types";
import { useQueryParams } from "~/hooks";
import { PaginationProps } from "~/types/global";
import * as Styled from "./pagination.styled";

export const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  length = 0,
  onChangePage,
}) => {
  const { queryParam } = useQueryParams();
  const page = queryParam.get("page");
  const paginationNumbers = [];
  const count = Math.ceil(length / itemsPerPage);
  for (let i = 1; i <= count; i++) {
    paginationNumbers.push(i);
  }

  const activePage = (pageNumber: number) => {
    if (page === pageNumber.toString()) {
      return true;
    } else if (pageNumber === 1 && !page) {
      return true;
    }
  };
  return (
    <Styled.Pagination>
      {paginationNumbers.map((pageNumber) => (
        <Button
          active={activePage(pageNumber)}
          onClick={() => onChangePage(pageNumber)}
          size={BUTTON_SIZE.SMALL}
          key={pageNumber}
          title={pageNumber.toString()}
        />
      ))}
    </Styled.Pagination>
  );
};

import React, { FC } from "react";
import { Button } from "~/components";
import { BUTTON_SIZE } from "../button/button.types";
import * as Styled from "./pagination.styled";
export const Pagination: FC<{
  itemsPerPage: number;
  length?: number;
  onChangePage: (pageNumber: number) => void;
}> = ({ itemsPerPage, length = 0, onChangePage }) => {
  const paginationNumbers = [];
  const count = Math.ceil(length / itemsPerPage);
  for (let i = 1; i <= count; i++) {
    paginationNumbers.push(i);
  }
  console.log(
    "itemsPerPage",
    itemsPerPage,
    Math.ceil(length / itemsPerPage),
    paginationNumbers
  );
  return (
    <Styled.Pagination>
      {paginationNumbers.map((pageNumber) => (
        <Button
          onClick={() => onChangePage(pageNumber - 1)}
          size={BUTTON_SIZE.SMALL}
          key={pageNumber}
          title={pageNumber.toString()}
        />
      ))}
    </Styled.Pagination>
  );
};

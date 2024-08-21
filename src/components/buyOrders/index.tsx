import React, { FC } from "react";
import * as Styled from "./buyOrders.styled";
import { commaSeparator, timeConvertor } from "~/utils";
import useTranslation from "next-translate/useTranslation";
import { useRequest } from "~/hooks/useRequest";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { endpoints } from "~/lib/api/endpoints";
import { QUERY_STRING } from "~/constants/global";
export const BuyOrders: FC<{ id: string }> = ({ id }) => {
  const { t } = useTranslation();

  const { data, isLoading } = useRequest<any>(
    [QUERY_KEYS.GET_MATCHES],
    endpoints.getMarketsActives(id, QUERY_STRING.BUY)
  );

  if (isLoading) return <div>Loading....</div>;
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Cell align="right">{t("price")}</Styled.Cell>
        <Styled.Cell align="center">{t("amount")}</Styled.Cell>
        <Styled.Cell align="left">{t("all")}</Styled.Cell>
      </Styled.Header>
      {data?.orders?.slice(0, 10)?.map((transaction) => (
        <Styled.Row key={transaction.match_id}>
          <Styled.Cell align="right" isPrice>
            {commaSeparator(transaction.price)}
          </Styled.Cell>
          <Styled.Cell align="center">
            {commaSeparator(transaction.amount)}
          </Styled.Cell>

          <Styled.Cell align="left">
            {commaSeparator(transaction.remain)}
          </Styled.Cell>
        </Styled.Row>
      ))}
    </Styled.Container>
  );
};

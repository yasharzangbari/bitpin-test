import { useRouter } from "next/router";
import React, { FC } from "react";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { useRequest } from "~/hooks/useRequest";
import { endpoints } from "~/lib/api/endpoints";
import * as Styled from "./transactions.styled";
import { commaSeparator } from "~/utils";
import { timeConvertor } from "~/utils/timeConvertor";
import { Transaction } from "~/types/transactions";
import useTranslation from "next-translate/useTranslation";
export const Transactions = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useRequest<Transaction[]>(
    [QUERY_KEYS.GET_MATCHES],
    endpoints.getMarketsMatches(id as string),
    true
  );

  if (isLoading) return <div>Loading....</div>;
  if (!data?.length) return <div>{t("noData")}</div>;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Cell align="right">{t("price")}</Styled.Cell>
        <Styled.Cell align="center">{t("amount")}</Styled.Cell>
        <Styled.Cell align="left">{t("time")}</Styled.Cell>
      </Styled.Header>
      {data?.slice(0, 10)?.map((transaction) => (
        <Styled.Row key={transaction.match_id}>
          <Styled.Cell align="right" isPrice type={transaction.type}>
            {commaSeparator(transaction.price)}
          </Styled.Cell>
          <Styled.Cell align="center">
            {commaSeparator(transaction.match_amount)}
          </Styled.Cell>

          <Styled.Cell align="left">
            {timeConvertor(transaction.time)}
          </Styled.Cell>
        </Styled.Row>
      ))}
    </Styled.Container>
  );
};

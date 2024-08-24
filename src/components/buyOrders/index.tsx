import React, { FC } from "react";
import { commaSeparator } from "~/utils";
import { QUERY_STRING } from "~/constants/global";
import { useOrders } from "~/hooks";
import * as Styled from "./buyOrders.styled";
import useTranslation from "next-translate/useTranslation";
import { Input } from "~/components";

export const BuyOrders = () => {
  const { t } = useTranslation();

  const { orders, isLoading, calculateOrder, finalResult } = useOrders(
    QUERY_STRING.BUY
  );

  if (isLoading) return <div>Loading....</div>;
  if (!orders?.length) return <div>{t("noData")}</div>;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Cell align="right">{t("price")}</Styled.Cell>
        <Styled.Cell align="center">{t("amount")}</Styled.Cell>
        <Styled.Cell align="left">{t("all")}</Styled.Cell>
      </Styled.Header>
      {orders?.map((transaction) => (
        <Styled.Row divider key={transaction.value}>
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
      <Input
        label="percent"
        onChange={calculateOrder}
        inputMode="numeric"
        type="number"
      />

      <Styled.Row divider={false}>
        {t("averagePrice", {
          averagePrice: commaSeparator(Number(finalResult?.averagePrice)),
        })}
      </Styled.Row>
      <Styled.Row divider={false}>
        {t("remainVolume", {
          remainVolume: commaSeparator(Number(finalResult?.remainVolume)),
        })}
      </Styled.Row>

      <Styled.Row divider={false}>
        {t("payOut", { payOut: commaSeparator(Number(finalResult?.payOut)) })}
      </Styled.Row>
    </Styled.Container>
  );
};

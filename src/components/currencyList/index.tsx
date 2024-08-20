"use client";
import React, { FC, useState } from "react";
import * as Styled from "./currencyList.styled";
import Image from "next/image";
import { commaSeparator, toPersianNumber } from "~/utils";
import { BUTTON_SIZE } from "../button/button.types";
import { Button } from "~/components";
import useTranslation from "next-translate/useTranslation";
import { Currencies } from "~/types/markets";
import { useQueryParams } from "~/hooks";

export const CurrencyList: FC<{ currencies?: Currencies[] }> = ({
  currencies,
}) => {
  const { t } = useTranslation();

  const { setQuery } = useQueryParams();

  const changeCurrency = (value: string) => {
    setQuery("type", value);
  };

  return (
    <div>
      <Styled.Header>
        <Button
          onClick={() => changeCurrency("IRT")}
          title={t("toman")}
          size={BUTTON_SIZE.SMALL}
        />
        <Button
          onClick={() => changeCurrency("USDT")}
          title={t("teter")}
          size={BUTTON_SIZE.SMALL}
        />
      </Styled.Header>
      {currencies?.map((currency) => {
        const data = currency?.currency1;
        return (
          <Styled.CurrencyWrapper>
            <Styled.CurrencySection>
              <img alt={data?.title} src={data?.image} />
              <Styled.Caption>
                <span>{data?.title_fa}</span>
                <span>{currency?.code?.replace("_", "/")}</span>
              </Styled.Caption>
            </Styled.CurrencySection>
            <Styled.CurrencySection>
              {<span>{commaSeparator(currency?.price_info?.price)}</span>}
            </Styled.CurrencySection>
            <Styled.CurrencySection>
              {<span>{commaSeparator(currency?.price_info?.change)}</span>}
            </Styled.CurrencySection>
            <Styled.CurrencySection>
              {/* <Link passHref> */}
              <Button title={t("sellOrBuy")} size={BUTTON_SIZE.MEDIUM} />
              {/* </Link> */}
            </Styled.CurrencySection>
          </Styled.CurrencyWrapper>
        );
      })}
    </div>
  );
};

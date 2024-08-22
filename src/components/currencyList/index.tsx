import React, { FC } from "react";
import * as Styled from "./currencyList.styled";
import useTranslation from "next-translate/useTranslation";
import { commaSeparator } from "~/utils";
import { BUTTON_SIZE } from "../button/button.types";
import { Button } from "~/components";
import { Result } from "~/types/markets";
import { useQueryParams } from "~/hooks";
import Link from "next/link";
import { routes } from "~/constants/routes";

export const CurrencyList: FC<{ currencies?: Result[] }> = ({ currencies }) => {
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
              <Link href={routes.details(currency.id)} passHref>
                <Button title={t("sellOrBuy")} size={BUTTON_SIZE.MEDIUM} />
              </Link>
            </Styled.CurrencySection>
          </Styled.CurrencyWrapper>
        );
      })}
    </div>
  );
};

import { useRouter } from "next/router";
import React, { FC } from "react";
import * as Styled from "./details.styled";
import { BuyOrders, SellOrders, Tabs, Transactions } from "~/components";
import { ACTIVE_TABS, tabs } from "~/constants/global";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <Styled.DetailsContainer>
      <Tabs tabItems={tabs}>
        <BuyOrders key={ACTIVE_TABS.BUY} id={id?.toString()} />
        <SellOrders key={ACTIVE_TABS.SELL} id={id?.toString()} />
        <Transactions key={ACTIVE_TABS.TRANSACTIONS} id={id?.toString()} />
      </Tabs>
    </Styled.DetailsContainer>
  );
};

export default Details;

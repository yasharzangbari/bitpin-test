import React from "react";
import * as Styled from "./details.styled";
import { BuyOrders, SellOrders, Tabs, Transactions } from "~/components";
import { ACTIVE_TABS, tabs } from "~/constants/global";

const Details = () => {
  return (
    <Styled.DetailsContainer>
      <Tabs tabItems={tabs}>
        <BuyOrders key={ACTIVE_TABS.BUY} />
        <SellOrders key={ACTIVE_TABS.SELL} />
        <Transactions key={ACTIVE_TABS.TRANSACTIONS} />
      </Tabs>
    </Styled.DetailsContainer>
  );
};

export default Details;

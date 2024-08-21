export const isClient = typeof window !== "undefined";

export enum ACTIVE_TABS {
  BUY = "buy",
  SELL = "sell",
  TRANSACTIONS = "transactions",
}

export enum QUERY_STRING {
  BUY = "buy",
  SELL = "sell",
}

export const tabs = [
  {
    id: 2,
    title: "buyOrders",
    key: ACTIVE_TABS.BUY,
  },
  {
    id: 3,
    title: "sellOrders",
    key: ACTIVE_TABS.SELL,
  },
  {
    id: 1,
    title: "transactions",
    key: ACTIVE_TABS.TRANSACTIONS,
  },
];

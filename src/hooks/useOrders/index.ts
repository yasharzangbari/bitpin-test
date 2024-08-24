import { ChangeEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Orders } from "~/types/orders";
import { useRequest } from "../useRequest";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { endpoints } from "~/lib/api/endpoints";

export const useOrders = (key: string) => {
  const router = useRouter();
  const { id = "" } = router.query;
  const [finalResult, setFinalResult] = useState({
    remainVolume: 0,
    averagePrice: 0,
    payOut: 0,
  });

  // if (!id) return { orders: [], isLoading: false };

  const { data, isLoading } = useRequest<Orders>(
    [QUERY_KEYS.GET_ACTIVES],
    endpoints.getMarketsActives(id.toString(), key),
    true
  );

  const orders = useMemo(() => {
    return data?.orders?.slice(0, 10)?.sort((a, b) => +b.price - +a.price);
  }, [data]);

  const calculateOrder = (event: ChangeEvent<HTMLInputElement>) => {
    const orderData = orders || [];
    const value = +event.target.value;
    const valuePercentage = value / 100;

    let totalPrice = 0;
    let totalRemain = 0;

    for (const order of orderData) {
      totalPrice += Number(order.price);
      totalRemain += Number(order.remain);
    }

    const averagePrice = totalPrice / orderData.length;
    const remainVolume = totalRemain * valuePercentage;
    const payOut = remainVolume * averagePrice;

    setFinalResult({
      remainVolume,
      averagePrice,
      payOut,
    });
  };

  return { orders, isLoading, calculateOrder, finalResult };
};

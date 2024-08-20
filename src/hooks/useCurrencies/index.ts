import { Markets } from "~/types/markets";
import { useRequest } from "../useRequest";
import { QUERY_KEYS } from "~/constants/queryKeys";
import { endpoints } from "~/lib/api/endpoints";
import { useMemo } from "react";
import { useQueryParams } from "..";

export const useCurrencies = () => {
  const { queryParam } = useQueryParams();
  const currencyType = queryParam.get("type") || "IRT";

  const { data, isLoading } = useRequest<Markets>(
    [QUERY_KEYS.GET_MARKETS],
    endpoints.getMarkets
  );

  const result = useMemo(() => {
    return data?.results
      ?.filter((item) => item.currency2.code === currencyType)
      ?.map((item) => ({
        id: item.id,
        currency1: item.currency1,
        currency2: item.currency2,
        price_info: item.price_info,
        code: item.code,
      }));
  }, [queryParam.toString(), data?.results]);

  return { result, isLoading, currencyType };
};

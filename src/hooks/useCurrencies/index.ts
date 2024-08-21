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
    if (!data?.results) return [];

    return data.results.filter((item) => item.currency2.code === currencyType);
  }, [currencyType, data?.results]);

  return { result, isLoading, currencyType };
};

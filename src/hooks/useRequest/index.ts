import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { requestHandler } from "~/lib/api/requestFactory";

export const useRequest = <TData>(
  keys: Array<string>,
  request: AxiosRequestConfig
): UseQueryResult<TData> => {
  return useQuery({
    queryKey: [keys, 1],
    queryFn: () => requestHandler(request),
    // refetchInterval: 3000,
    // initialData: undefined,
    // gcTime: 0,
    // staleTime: 0,
  });
};

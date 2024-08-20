/* eslint-disable compat/compat */
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const queryParam = new URLSearchParams(Array.from(searchParams.entries()));

  const setQuery = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      const hasQuery = queryParam.get(key);

      if (hasQuery === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams]
  );

  return { queryParam, setQuery };
};

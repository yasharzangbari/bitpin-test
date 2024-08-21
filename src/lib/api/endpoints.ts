export const endpoints = {
  getMarkets: {
    url: "/v1/mkt/markets/",
    method: "GET",
  },
  getMarketsMatches: (id?: string) => ({
    url: `/v1/mth/matches/${id}/`,
    method: "GET",
  }),
  getMarketsActives: (id: string, type: string) => ({
    url: `/v2/mth/actives/${id}/?type=${type}`,
    method: "GET",
  }),
};

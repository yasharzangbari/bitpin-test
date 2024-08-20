import axios, { AxiosRequestConfig } from "axios";

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

const apiConfig: AxiosRequestConfig = {
  baseURL: "https://api.bitpin.org",

  headers: { "Content-Type": "application/json" },
};

export default apiConfig;

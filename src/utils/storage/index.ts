import { isClient } from "~/constants/global";

export const setStorage = (key: string, value: string) => {
  return isClient && localStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
  return isClient && localStorage.getItem(key);
};

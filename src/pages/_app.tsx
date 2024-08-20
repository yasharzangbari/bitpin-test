import React from "react";
import "../theme/global.css";
import type { AppProps } from "next/app";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "~/components";
import { IranSansX } from "~/theme/font";

export default function App({ Component, pageProps }: AppProps) {
  const { theme, changeTheme } = useTheme();
  const queryClient = new QueryClient();

  return (
    <main className={IranSansX.className}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Header changeTheme={changeTheme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </main>
  );
}
